import { NextRequest, NextResponse } from 'next/server'
import { deleteBunnyVideo } from '@/lib/bunny'
import { configureCloudinary } from '@/lib/cloudinary'
import { createClient } from '@/lib/supabase/server'
import { isBunnyVideo } from '@/lib/utils'

type RouteContext = { params: Promise<{ id: string }> }

async function getAuthenticatedUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return { supabase, user }
}

export async function PATCH(request: NextRequest, { params }: RouteContext) {
  const { id } = await params
  const { supabase, user } = await getAuthenticatedUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { title, description, created_at } = await request.json()

  if (!title?.trim()) {
    return NextResponse.json({ error: 'Title is required' }, { status: 400 })
  }

  const updates: {
    title: string
    description: string | null
    created_at?: string
  } = {
    title: title.trim(),
    description: description?.trim() ?? null,
  }

  if (created_at !== undefined) {
    const parsedDate = new Date(created_at)

    if (Number.isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: 'Invalid upload date' }, { status: 400 })
    }

    updates.created_at = parsedDate.toISOString()
  }

  const { data, error } = await supabase
    .from('videos')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data)
}

export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params
  const { supabase, user } = await getAuthenticatedUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let { data: video, error: selectError } = await supabase
    .from('videos')
    .select('cloudinary_public_id, video_url, thumbnail_url, storage_provider')
    .eq('id', id)
    .single()

  if (selectError && selectError.message?.includes('storage_provider')) {
    const fallback = await supabase
      .from('videos')
      .select('cloudinary_public_id, video_url, thumbnail_url')
      .eq('id', id)
      .single()
    video = fallback.data as typeof video
  }

  if (video?.cloudinary_public_id) {
    if (isBunnyVideo(video)) {
      const bunnyId = video.cloudinary_public_id.replace(/^bunny_/, '')
      try {
        await deleteBunnyVideo(bunnyId)
      } catch (bunnyErr) {
        console.error('Bunny deletion failed for', bunnyId, bunnyErr)
      }
    } else {
      const cloudinary = configureCloudinary()
      try {
        await cloudinary.uploader.destroy(video.cloudinary_public_id, {
          resource_type: 'video',
        })
      } catch {
        // Log but don't fail. The DB row still needs to be removed.
        console.error('Cloudinary deletion failed for', video.cloudinary_public_id)
      }
    }
  }

  const { error } = await supabase.from('videos').delete().eq('id', id)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

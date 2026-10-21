import { NextRequest, NextResponse } from 'next/server'
import { deleteBunnyVideo } from '@/lib/bunny'
import { configureCloudinary } from '@/lib/cloudinary'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const {
    title,
    description,
    cloudinary_public_id,
    video_url,
    hls_url,
    thumbnail_url,
    thumbnail_offset_seconds,
    duration,
    storage_provider = 'cloudinary',
  } = body

  if (!title || !cloudinary_public_id || !video_url || !thumbnail_url) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const thumbnailOffset =
    Number.isFinite(thumbnail_offset_seconds) && thumbnail_offset_seconds >= 0
      ? Math.round(thumbnail_offset_seconds)
      : 2

  const insertPayload: Record<string, unknown> = {
    title: title.trim(),
    description,
    cloudinary_public_id,
    video_url,
    hls_url,
    hls_ready: storage_provider === 'bunny' ? true : false,
    thumbnail_url,
    thumbnail_offset_seconds: thumbnailOffset,
    duration,
    storage_provider,
  }

  let { data, error } = await supabase
    .from('videos')
    .insert(insertPayload)
    .select()
    .single()

  // Gracefully fallback if the storage_provider column hasn't been created yet in Supabase
  if (error && error.message.includes('storage_provider')) {
    delete insertPayload.storage_provider
    const retry = await supabase
      .from('videos')
      .insert(insertPayload)
      .select()
      .single()
    data = retry.data
    error = retry.error
  }

  if (error) {
    if (storage_provider === 'bunny') {
      const bunnyId = cloudinary_public_id.replace(/^bunny_/, '')
      try {
        await deleteBunnyVideo(bunnyId)
      } catch (cleanupError) {
        console.error('Bunny cleanup failed for', bunnyId, cleanupError)
      }
    } else {
      const cloudinary = configureCloudinary()
      try {
        await cloudinary.uploader.destroy(cloudinary_public_id, {
          resource_type: 'video',
        })
      } catch (cleanupError) {
        console.error('Cloudinary cleanup failed for', cloudinary_public_id, cleanupError)
      }
    }

    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data, { status: 201 })
}


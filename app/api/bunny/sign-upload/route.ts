import { NextRequest, NextResponse } from 'next/server'
import {
  createBunnyVideo,
  generateBunnyTusSignature,
  getBunnyConfig,
  getBunnyDirectPlayUrl,
  getBunnyHlsUrl,
  getBunnyThumbnailUrl,
} from '@/lib/bunny'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: NextRequest) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { title } = await request.json()
    const videoTitle = (title && typeof title === 'string') ? title.trim() : 'Untitled Video'

    const bunnyVideo = await createBunnyVideo(videoTitle)
    const { libraryId, cdnHostname } = getBunnyConfig()

    // 24 hours expiration
    const expirationTime = Math.floor(Date.now() / 1000) + 3600 * 24
    const signature = generateBunnyTusSignature(bunnyVideo.guid, expirationTime)

    return NextResponse.json({
      videoId: bunnyVideo.guid,
      libraryId,
      cdnHostname,
      expirationTime,
      signature,
      hlsUrl: getBunnyHlsUrl(bunnyVideo.guid, cdnHostname),
      thumbnailUrl: getBunnyThumbnailUrl(bunnyVideo.guid, cdnHostname),
      directPlayUrl: getBunnyDirectPlayUrl(bunnyVideo.guid, cdnHostname),
    })
  } catch (error) {
    console.error('Error creating Bunny video:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to initialize Bunny upload' },
      { status: 500 }
    )
  }
}

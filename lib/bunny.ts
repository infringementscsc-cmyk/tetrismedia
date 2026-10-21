import crypto from 'crypto'

export function getBunnyConfig() {
  const libraryId = process.env.BUNNY_STREAM_LIBRARY_ID || '785774'
  const apiKey = process.env.BUNNY_STREAM_API_KEY || 'de400d7a-8244-4cb5-b9e809f327c4-6a93-4e14'
  const cdnHostname =
    process.env.NEXT_PUBLIC_BUNNY_STREAM_CDN_HOSTNAME ||
    process.env.BUNNY_STREAM_CDN_HOSTNAME ||
    'vz-a8bd22b2-a4b.b-cdn.net'

  return { libraryId, apiKey, cdnHostname }
}

export async function createBunnyVideo(title: string): Promise<{ guid: string; title: string }> {
  const { libraryId, apiKey } = getBunnyConfig()

  const res = await fetch(`https://video.bunnycdn.com/library/${libraryId}/videos`, {
    method: 'POST',
    headers: {
      AccessKey: apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`Bunny create video failed (${res.status}): ${errorText}`)
  }

  return res.json()
}

export function generateBunnyTusSignature(videoId: string, expirationTime: number): string {
  const { libraryId, apiKey } = getBunnyConfig()
  const data = `${libraryId}${apiKey}${expirationTime}${videoId}`
  return crypto.createHash('sha256').update(data).digest('hex')
}

export async function deleteBunnyVideo(videoId: string): Promise<boolean> {
  const { libraryId, apiKey } = getBunnyConfig()

  const res = await fetch(`https://video.bunnycdn.com/library/${libraryId}/videos/${videoId}`, {
    method: 'DELETE',
    headers: {
      AccessKey: apiKey,
    },
  })

  return res.ok
}

export function getBunnyHlsUrl(videoId: string, cdnHost?: string): string {
  const host = cdnHost || getBunnyConfig().cdnHostname
  return `https://${host}/${videoId}/playlist.m3u8`
}

export function getBunnyThumbnailUrl(videoId: string, cdnHost?: string): string {
  const host = cdnHost || getBunnyConfig().cdnHostname
  return `https://${host}/${videoId}/thumbnail.jpg`
}

export function getBunnyDirectPlayUrl(videoId: string, cdnHost?: string): string {
  const host = cdnHost || getBunnyConfig().cdnHostname
  return `https://${host}/${videoId}/play_720p.mp4`
}

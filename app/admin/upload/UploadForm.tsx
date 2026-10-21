'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import * as tus from 'tus-js-client'
import { cloudinaryHlsUrl, cloudinaryThumbnail } from '@/lib/utils'
import { StorageProvider } from '@/types/video'

interface CloudinaryUploadResult {
  public_id: string
  secure_url: string
  duration?: number
}

interface CloudinaryUploadSignature {
  signature: string
  timestamp: number
  api_key: string
  cloud_name: string
  eager: string
  eager_async: boolean
  eager_notification_url: string
}

interface BunnySignResponse {
  videoId: string
  libraryId: string
  cdnHostname: string
  expirationTime: number
  signature: string
  hlsUrl: string
  thumbnailUrl: string
  directPlayUrl: string
}

function getVideoDuration(file: File): Promise<number | null> {
  return new Promise((resolve) => {
    try {
      const video = document.createElement('video')
      video.preload = 'metadata'
      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src)
        if (Number.isFinite(video.duration)) {
          resolve(Math.round(video.duration))
        } else {
          resolve(null)
        }
      }
      video.onerror = () => {
        resolve(null)
      }
      video.src = URL.createObjectURL(file)
    } catch {
      resolve(null)
    }
  })
}

export default function UploadForm() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [storageProvider, setStorageProvider] = useState<StorageProvider>('bunny')
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnailOffsetSeconds, setThumbnailOffsetSeconds] = useState(2)
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<'idle' | 'uploading' | 'saving' | 'done' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0]
    if (!selected) return

    setFile(selected)

    if (!title) {
      setTitle(selected.name.replace(/\.[^/.]+$/, ''))
    }
  }

  async function getCloudinarySignature(): Promise<CloudinaryUploadSignature> {
    const res = await fetch('/api/sign-upload')

    if (!res.ok) {
      throw new Error('Failed to get Cloudinary upload signature')
    }

    return res.json()
  }

  async function uploadToCloudinary(
    fileToUpload: File,
    sig: CloudinaryUploadSignature
  ): Promise<CloudinaryUploadResult> {
    const formData = new FormData()
    formData.append('file', fileToUpload)
    formData.append('api_key', sig.api_key)
    formData.append('timestamp', String(sig.timestamp))
    formData.append('signature', sig.signature)
    formData.append('folder', 'videos')
    formData.append('resource_type', 'video')
    formData.append('eager', sig.eager)
    formData.append('eager_async', String(sig.eager_async))
    formData.append('eager_notification_url', sig.eager_notification_url)

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', `https://api.cloudinary.com/v1_1/${sig.cloud_name}/video/upload`)

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          setProgress(Math.round((event.loaded / event.total) * 100))
        }
      }

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          let errorMsg = 'Cloudinary upload failed'
          try {
            const errData = JSON.parse(xhr.responseText)
            if (errData?.error?.message) {
              errorMsg = `Cloudinary: ${errData.error.message}`
            }
          } catch {
            if (xhr.responseText) {
              errorMsg = `Cloudinary (${xhr.status}): ${xhr.responseText.slice(0, 150)}`
            }
          }
          console.error('Cloudinary upload error response:', xhr.status, xhr.responseText)
          reject(new Error(errorMsg))
        }
      }

      xhr.onerror = () => reject(new Error('Network error during upload to Cloudinary'))
      xhr.send(formData)
    })
  }

  async function uploadToBunny(
    fileToUpload: File,
    videoTitle: string
  ): Promise<BunnySignResponse> {
    const signRes = await fetch('/api/bunny/sign-upload', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: videoTitle }),
    })

    if (!signRes.ok) {
      const errData = await signRes.json().catch(() => ({}))
      throw new Error(errData.error || 'Failed to initialize Bunny upload')
    }

    const signData: BunnySignResponse = await signRes.json()

    return new Promise((resolve, reject) => {
      const upload = new tus.Upload(fileToUpload, {
        endpoint: 'https://video.bunnycdn.com/tusupload',
        retryDelays: [0, 3000, 5000, 10000, 20000],
        headers: {
          AuthorizationSignature: signData.signature,
          AuthorizationExpire: String(signData.expirationTime),
          VideoId: signData.videoId,
          LibraryId: signData.libraryId,
        },
        metadata: {
          filetype: fileToUpload.type || 'video/mp4',
          title: videoTitle,
        },
        onError: (error) => {
          console.error('Bunny TUS upload error:', error)
          reject(new Error(error?.message || 'Bunny CDN upload failed'))
        },
        onProgress: (bytesUploaded, bytesTotal) => {
          if (bytesTotal > 0) {
            setProgress(Math.round((bytesUploaded / bytesTotal) * 100))
          }
        },
        onSuccess: () => {
          resolve(signData)
        },
      })

      upload.start()
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!file || !title.trim()) {
      return
    }

    setStatus('uploading')
    setErrorMsg('')
    setProgress(0)

    try {
      const detectedDuration = await getVideoDuration(file)

      if (storageProvider === 'bunny') {
        const signData = await uploadToBunny(file, title.trim())

        setStatus('saving')

        const res = await fetch('/api/videos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim() || null,
            cloudinary_public_id: `bunny_${signData.videoId}`,
            video_url: signData.directPlayUrl,
            hls_url: signData.hlsUrl,
            thumbnail_url: signData.thumbnailUrl,
            thumbnail_offset_seconds: thumbnailOffsetSeconds,
            duration: detectedDuration,
            storage_provider: 'bunny',
          }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error ?? 'Failed to save Bunny video')
        }
      } else {
        const sig = await getCloudinarySignature()
        const result = await uploadToCloudinary(file, sig)

        const thumbnailUrl = cloudinaryThumbnail(
          result.public_id,
          sig.cloud_name,
          thumbnailOffsetSeconds
        )
        const hlsUrl = cloudinaryHlsUrl(result.public_id, sig.cloud_name)

        setStatus('saving')

        const res = await fetch('/api/videos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title.trim(),
            description: description.trim() || null,
            cloudinary_public_id: result.public_id,
            video_url: result.secure_url,
            hls_url: hlsUrl,
            thumbnail_url: thumbnailUrl,
            thumbnail_offset_seconds: thumbnailOffsetSeconds,
            duration: result.duration ? Math.round(result.duration) : detectedDuration,
            storage_provider: 'cloudinary',
          }),
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error ?? 'Failed to save video')
        }
      }

      setStatus('done')
      setTimeout(() => router.push('/admin/dashboard'), 1000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Upload failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Storage Provider Selection */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#f1f1f1]">
          Storage Provider (Nền tảng lưu trữ)
        </label>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setStorageProvider('bunny')}
            className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
              storageProvider === 'bunny'
                ? 'border-[#3ea6ff] bg-[#1a2c3f]/50 ring-1 ring-[#3ea6ff]'
                : 'border-[#3f3f3f] bg-[#121212] hover:bg-[#1a1a1a]'
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <span className="flex items-center gap-2 font-semibold text-white">
                🐰 Bunny Stream
                <span className="rounded-full bg-[#3ea6ff]/20 px-2 py-0.5 text-[10px] font-semibold text-[#3ea6ff]">
                  Khuyên dùng
                </span>
              </span>
              <input
                type="radio"
                name="storage_provider"
                checked={storageProvider === 'bunny'}
                onChange={() => setStorageProvider('bunny')}
                className="accent-[#3ea6ff]"
              />
            </div>
            <p className="mt-2 text-xs text-[#aaaaaa]">
              Chi phí siêu rẻ ($0.01/GB), upload TUS tốc độ cao trực tiếp lên Bunny CDN, tự động tối ưu HLS không giới hạn token.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setStorageProvider('cloudinary')}
            className={`flex flex-col items-start rounded-xl border p-4 text-left transition-all ${
              storageProvider === 'cloudinary'
                ? 'border-[#3ea6ff] bg-[#1a2c3f]/50 ring-1 ring-[#3ea6ff]'
                : 'border-[#3f3f3f] bg-[#121212] hover:bg-[#1a1a1a]'
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <span className="flex items-center gap-2 font-semibold text-white">
                ☁️ Cloudinary
              </span>
              <input
                type="radio"
                name="storage_provider"
                checked={storageProvider === 'cloudinary'}
                onChange={() => setStorageProvider('cloudinary')}
                className="accent-[#3ea6ff]"
              />
            </div>
            <p className="mt-2 text-xs text-[#aaaaaa]">
              Lưu trữ Cloudinary truyền thống. Phù hợp nếu bạn muốn tiếp tục lưu vào tài khoản Cloudinary cũ.
            </p>
          </button>
        </div>
      </div>

      {/* Video File Picker */}
      <div>
        <label className="mb-2 block text-sm font-medium text-[#f1f1f1]">Video file</label>
        <div
          className="cursor-pointer rounded-xl border border-dashed border-[#3f3f3f] bg-[#121212] p-8 text-center hover:bg-[#1a1a1a]"
          onClick={() => fileInputRef.current?.click()}
        >
          {file ? (
            <div>
              <p className="text-sm font-medium text-[#f1f1f1]">{file.name}</p>
              <p className="mt-2 text-xs text-[#aaaaaa]">
                {storageProvider === 'bunny'
                  ? 'Sẵn sàng tải lên Bunny Stream CDN qua giao thức TUS'
                  : 'Sẵn sàng tải lên Cloudinary'}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-[#f1f1f1]">Click to select a video file</p>
              <p className="mt-2 text-xs text-[#aaaaaa]">
                {storageProvider === 'bunny'
                  ? 'Video sẽ được upload trực tiếp tới Bunny Stream CDN.'
                  : 'Video uploads are sent to Cloudinary.'}
              </p>
            </div>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div>
        <label htmlFor="title" className="mb-2 block text-sm font-medium text-[#f1f1f1]">
          Title <span className="text-red-400">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-lg border border-[#3f3f3f] bg-[#121212] px-3 py-2 text-white outline-none focus:border-[#3ea6ff]"
          placeholder="Video title"
        />
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-medium text-[#f1f1f1]">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="w-full resize-none rounded-lg border border-[#3f3f3f] bg-[#121212] px-3 py-2 text-white outline-none focus:border-[#3ea6ff]"
          placeholder="Optional description"
        />
      </div>

      <div>
        <label htmlFor="thumbnailOffsetSeconds" className="mb-2 block text-sm font-medium text-[#f1f1f1]">
          Thumbnail timestamp (seconds)
        </label>
        <input
          id="thumbnailOffsetSeconds"
          type="number"
          min={0}
          step={1}
          value={thumbnailOffsetSeconds}
          onChange={(e) => setThumbnailOffsetSeconds(Math.max(0, Number(e.target.value) || 0))}
          className="w-full rounded-lg border border-[#3f3f3f] bg-[#121212] px-3 py-2 text-white outline-none focus:border-[#3ea6ff]"
        />
        <p className="mt-2 text-xs text-[#aaaaaa]">
          New uploads default to 2 seconds so the thumbnail skips black intro frames.
        </p>
      </div>

      {status === 'uploading' && (
        <div className="rounded-xl border border-[#3f3f3f] bg-[#121212] p-4">
          <div className="mb-2 flex justify-between text-xs text-[#aaaaaa]">
            <span>
              {storageProvider === 'bunny'
                ? 'Uploading to Bunny Stream CDN...'
                : 'Uploading to Cloudinary...'}
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-[#272727]">
            <div
              className="h-2 rounded-full bg-[#3ea6ff] transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {status === 'saving' && <p className="text-sm text-[#3ea6ff]">Saving metadata...</p>}
      {status === 'done' && <p className="text-sm text-green-400">Upload complete! Redirecting...</p>}
      {status === 'error' && <p className="text-sm text-red-400">{errorMsg}</p>}

      <button
        type="submit"
        disabled={!file || !title.trim() || status === 'uploading' || status === 'saving' || status === 'done'}
        className="rounded-full bg-[#3ea6ff] px-6 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-95 disabled:opacity-60"
      >
        {status === 'uploading'
          ? `Uploading... ${progress}%`
          : status === 'saving'
            ? 'Saving...'
            : 'Upload video'}
      </button>
    </form>
  )
}

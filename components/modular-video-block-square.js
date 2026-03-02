import { useState, useEffect } from 'react'

function getVimeoId(url) {
  if (!url) return null
  const match = url.match(/vimeo\.com\/(?:progressive_redirect\/playback\/|video\/)?(\d+)/) || url.match(/\/(\d{6,})/)
  return match ? match[1] : null
}

function useVimeoPoster(url) {
  const [poster, setPoster] = useState(null)
  useEffect(() => {
    const id = getVimeoId(url)
    if (!id) return
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=1920`)
      .then(r => r.json())
      .then(data => {
        if (data.thumbnail_url) {
          setPoster(data.thumbnail_url.replace(/_\d+/, '_1920'))
        }
      })
      .catch(() => {})
  }, [url])
  return poster
}

export default function ModularVideoBlock({ video }) {
  const poster = useVimeoPoster(video)
  return (
    <div className="grid grid-cols-9 md:p-3 border-b border-white md:border-0">
      <div className="col-span-9 md:col-span-5 md:col-start-3">
        <video
          controls
          preload="metadata"
          poster={poster || undefined}
          className="w-full h-[100vw] md:h-[54vw] relative z-10 block object-cover object-center"
        >
          <source src={`${video}#t=0.5`} type="video/mp4"/>
          Sorry. Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}
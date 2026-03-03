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
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${id}&width=1000`)
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

export default function ModularVideoBlockResponsive({ video }) {
  const poster = useVimeoPoster(video)
  return (
    <div className="relative overflow-hidden w-full">
      <video
        controls
        preload="metadata"
        className="w-full"
        poster={poster || undefined}
      >
        <source src={`${video}`} type="video/mp4"/>
        Sorry. Your browser does not support the video tag.
      </video>
    </div>
  )
}
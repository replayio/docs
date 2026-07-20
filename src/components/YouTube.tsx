import React from 'react'

interface YouTubeProps {
  /** The YouTube video ID (e.g. "1yKkDy313rM"). */
  id: string
  /** Optional accessible title for the embedded player. */
  title?: string
}

export const YouTube: React.FC<YouTubeProps> = ({
  id,
  title = 'YouTube video player',
}) => {
  return (
    <div
      className="relative my-6 h-0 w-full overflow-clip rounded-xl border border-transparent"
      style={{ paddingBottom: '56.25%' }}
    >
      <iframe
        className="absolute inset-0"
        style={{ border: 0, height: '100%', width: '100%' }}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default YouTube

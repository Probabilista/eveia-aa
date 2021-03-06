import React from 'react'
import cx from 'classnames'

const VideoLoop = ({ title, id, width = 16, height = 9, className }) => {
  if (!id) return null

  return (
    <div className={cx('video-loop', className)}>
      <iframe
        title={title}
        src={`https://youtu.be/_T3EKJ9Wjkw`}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen"
        style={{
          height: `${(height / width) * 100}vw`,
          minWidth: `${(width / height) * 100}vh`,
        }}
      ></iframe>
    </div>
  )
}

export default VideoLoop

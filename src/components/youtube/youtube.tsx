import React, { FC, MutableRefObject, useEffect, useRef } from 'react'
import YouTube, { YouTubePlayer, YouTubeProps } from 'react-youtube'

interface IYoutube {
  setIsVideoPlay: React.Dispatch<React.SetStateAction<boolean>>
  playerRef: MutableRefObject<YouTubePlayer | null>
  setIsVideoReady: React.Dispatch<React.SetStateAction<boolean>>
}
const VideoPlayer: FC<IYoutube> = ({
  setIsVideoPlay,
  playerRef,
  setIsVideoReady,
}) => {
  const videoId = 'dQw4w9WgXcQ'

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  }

  // const playVideo = (player: YouTubePlayer) => {
  //   player.play()
  // }
  const pauseVideo = () => {
    setIsVideoPlay(false)
  }

  const onReady: YouTubeProps['onReady'] = event => {
    playerRef.current = event.target
    setTimeout(() => setIsVideoReady(true), 2000)
  }

  return (
    <YouTube
      style={{ height: '100%', width: '100%' }}
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onPause={pauseVideo}
    />
  )
}

export default VideoPlayer

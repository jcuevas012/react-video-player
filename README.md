This project was bootstrapped with
[Demo](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Usage 

  
### `
<VideoPlayer source={VIDEO_SOURCE}   id="firstPlayer" />
`

## Hook
### `
    const videoElement = useRef<HTMLVideoElement>(null)
    const { 
        togglePlay, 
        isPlaying,
        onFullScreen,
        onMuted,
        handleVideoSpeed,
        currentSpeed,
        muted,
        onUpdateProgress,
        duration,
        progress,
        onVolumeChange,
        currentVolume,
        handleManualProgress,
        currentTime,
        watchAgain,
        isVideoEnd
     } = useVideoPlayer(videoElement)
`
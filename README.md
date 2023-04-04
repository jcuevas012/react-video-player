This project was as react example
[Demo](http://videoplayercomponent-20230403202406-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/).

## Available Scripts

In the project directory, you can run:

### `npm start`

## Usage 

  
```jsx
<VideoPlayer source={VIDEO_SOURCE}   id="firstPlayer" />
```

## Hook

```jsx
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
```
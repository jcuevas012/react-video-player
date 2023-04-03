import { RefObject, useState } from "react"

interface VideoPlayerHookResult {
    togglePlay: () => void
    isPlaying: boolean
    onFullScreen: () => void
    progress: number;
    onMuted: () => void
    muted: boolean
    onUpdateProgress: () => void
    handleVideoSpeed: (value: number) => void
    currentSpeed: number,
    onPlayingTimeUpdate: (value: number) => void
    duration: number
    currentVolume: number;
    onVolumeChange: (volume: number) => void
    handleManualProgress: (volume: number) => void

}


function useVideoPlayer(videoElement?: RefObject<HTMLVideoElement> | null): VideoPlayerHookResult {
    const [playing, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [muted, setMuted] = useState(false)
    const [speed, setSpeed] = useState(1)
    const [duration, setDuration] = useState(0)
    const [currentVolume, setCurrentVolume] = useState(videoElement?.current?.volume || 6)



    const togglePlay = () => {
        
        if (!videoElement) {
            return
        }

        playing ? videoElement.current?.pause() : videoElement.current?.play()
        setPlaying(!playing)
        
    }


    const onFullScreen = () =>  {
        if (!videoElement) {
            return 
        }
        videoElement.current?.requestFullscreen()
    }

    const onMuted = () => {
        if (!videoElement || !videoElement.current) {
            return
        }
        
        videoElement.current.muted = !videoElement.current.muted
        setMuted(!muted) 
    }


    const onPlayingTimeUpdate = () => {
        if (!videoElement || !videoElement?.current) {
            return 
        }
        const progress = (videoElement?.current?.currentTime / videoElement?.current?.duration) * 100
        setProgress(progress)
    }

    const onUpdateProgress = () => {
        if (!videoElement || !videoElement?.current) {
            return
         }

         if (!duration) {
            setDuration(videoElement.current.duration)
         }
         const currentTime = (videoElement.current.currentTime / videoElement.current.duration) * 100;
        setProgress(currentTime)
    }

    const handleVideoSpeed = (value: number) => {
        if (!videoElement || !videoElement?.current) {
            return
         }

        videoElement.current.playbackRate = value;
        setSpeed(value)
      };
 

    const onVolumeChange = (volume: number) => {
        
        if (!videoElement || !videoElement.current) {
            return
        }

        videoElement.current.volume = volume
        setCurrentVolume(volume)
        
    }


  const handleManualProgress = (progress: number) => {

    if (!videoElement || !videoElement.current) {
        return
    }

    // const newProgress = (videoElement.current.duration / 100) * progress;
    // videoElement.current.currentTime = progress
    setProgress(progress)
  };

    return {
        togglePlay,
        onFullScreen,
        isPlaying: playing,
        progress,
        onMuted,
        muted,
        handleVideoSpeed,
        onUpdateProgress,
        currentSpeed: speed,
        onPlayingTimeUpdate,
        duration,
        currentVolume, 
        onVolumeChange,
        handleManualProgress
    }
}


export default useVideoPlayer
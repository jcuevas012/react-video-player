import React, { useRef } from "react"
import { Box } from "@chakra-ui/react";
import useVideoPlayer from "./useVideoPlayer";
import PlayButton from "./controls/PlayButton";
import FullScreenButton from "./controls/FullScreenButton";
import MuteButton from "./controls/MuteButton";
import VideoSpeed from "./controls/VideoSpeed";
import DisplayTime from "./controls/DisplayTime";
import VolumeSlider from "./controls/VolumeSlider";


interface VideoPlayerProps {
    id: string
    source: string
}


const controlElementId = (parentId: string, elementId: string) => `${parentId}-${elementId}`


const VideoPlayer: React.FC<VideoPlayerProps> = ({ id, source }) => {

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
        
     } = useVideoPlayer(videoElement)


    return <Box>
                <video 
                    id={id} src={source} 
                    ref={videoElement}  
                    onTimeUpdate={onUpdateProgress}
                />
                <DisplayTime duration={duration} currentProgress={progress} id={controlElementId(id, 'display-time')}/>
                <PlayButton onClick={togglePlay} isPlaying={isPlaying} id={controlElementId(id, 'play-btn')} />
                <FullScreenButton onClick={onFullScreen} id={controlElementId(id, 'fullscreen-btn')} />
                <MuteButton onClick={onMuted}  muted={muted} id={controlElementId(id, 'mute-btn')} />
                <VideoSpeed onClick={handleVideoSpeed} id={controlElementId(id, 'mute-btn')} currentVelocity={currentSpeed} />
                <VolumeSlider onVolumeChange={onVolumeChange} volume={currentVolume} id={controlElementId(id, 'volume-slider')} />
            </Box>
}


export default VideoPlayer;
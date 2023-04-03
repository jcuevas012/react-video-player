import React, { useRef } from "react"
import { Box, Flex  } from "@chakra-ui/react";
import useVideoPlayer from "./useVideoPlayer";
import PlayButton, { PlayBtnType } from "./controls/PlayBtn";
import FullScreenButton from "./controls/FullScreenButton";
import MuteButton from "./controls/MuteBtn";
import VideoSpeed from "./controls/VideoSpeed";
import DisplayTime from "./controls/DisplayTime";
import VolumeSlider from "./controls/VolumeSlider";
import ProgressBarSlider from "./controls/ProgessBarSlider";
import WatchAgainButton from "./controls/WatchAgainBtn";


interface VideoPlayerProps {
    id: string
    source: string
}


const controlElementId = (parentId: string, elementId: string) => `${parentId}-${elementId}`


const PlayCenterControl = ({ isVideoEnd, isPlaying, togglePlay, watchAgain, id }: any) => {
    const showCenterControl = !isPlaying || isVideoEnd

    return    showCenterControl ? 
                    <Flex
                        position="absolute"
                        zIndex={10}
                    >
                            <WatchAgainButton 
                                isVideoEnd={isVideoEnd} 
                                onClick={watchAgain} 
                                id={controlElementId(id, 'watch-again')} 
                            />
                          {!isVideoEnd &&  <PlayButton
                                onClick={togglePlay}
                                isPlaying={isPlaying}
                                type={PlayBtnType.BUTTON}
                                id={controlElementId(id, 'play-btn')} 
                            />}
                    </Flex> 
                    : null
            
}


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
        handleManualProgress,
        currentTime,
        watchAgain,
        isVideoEnd
     } = useVideoPlayer(videoElement)



     
     

    return <Flex
            alignContent={"center"}
            justifyContent="center"
            alignSelf={'center'}
            position={'relative'}
            alignItems="center"
            id={`${id}-container`}
            width={'722px'}
        >
                <video 
                    style={{
                        zIndex: 1
                    }}
                    id={id} src={source} 
                    ref={videoElement}  
                    onTimeUpdate={onUpdateProgress}
                />
        
       
            <PlayCenterControl
                isPlaying={isPlaying}
                isVideoEnd={isVideoEnd}
                togglePlay={togglePlay}
                watchAgain={watchAgain}
            />
            <Flex
                flexDirection={'column'}
                position="absolute"
                zIndex={10}
                width={'97%'}
                bottom={15}
            >
            <ProgressBarSlider 
                handleManualProgress={handleManualProgress}  
                progress={progress} id={controlElementId(id, 'progrss-bar')} 
                />
           <Flex
                top={-2}
                backgroundColor="rgba(0, 0, 0, 0.1)"
                borderBottomRadius={"25px"}
                flexDirection={"row"}
                mt={2}
                pt={2}
                pl={'14px'}
                pr={'14px'}
                pb={2}
                verticalAlign={"center"}
            >
                <Flex
                    flex={2}
                    alignItems="center"
                    justifyContent="left"
                >
                    <PlayButton
                    type={PlayBtnType.ICON}
                    onClick={togglePlay} 
                    isPlaying={isPlaying} 
                    id={controlElementId(id, 'play-btn-icon')} />
                    <MuteButton 
                        onClick={onMuted}  
                        muted={muted} 
                        id={controlElementId(id, 'mute-btn')} />
                    <VolumeSlider 
                        onVolumeChange={onVolumeChange} 
                        volume={currentVolume} 
                        id={controlElementId(id, 'volume-slider')} />
                </Flex>
                <Flex
                        flex={6}
                        alignItems="center"
                        justifyContent="center"

                    >
                    <DisplayTime 
                        duration={duration} 
                        currentProgress={currentTime} 
                        id={controlElementId(id, 'display-time')}/>
                </Flex>    
                <Flex
                    flex={1}
                >
                    <VideoSpeed onClick={handleVideoSpeed} id={controlElementId(id, 'mute-btn')} currentVelocity={currentSpeed} />
                    <FullScreenButton onClick={onFullScreen} id={controlElementId(id, 'fullscreen-btn')} />
                </Flex>
            </Flex>
        </Flex>
       
        </Flex>
}


export default VideoPlayer;
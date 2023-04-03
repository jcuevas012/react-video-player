import { Box, Text } from "@chakra-ui/react"
import React, { useCallback, useMemo } from "react"


interface DisplayTimeProps {
    id: string
    duration: number
    currentProgress: number
}


const DisplayTime : React.FC<DisplayTimeProps> = ({ id, currentProgress, duration }) => {



    const getSecondsToVideoTime = useCallback((time: number) => {
        const minutes = Math.floor(time / 60);
        let seconds = (time % 60);

        const getFormattedValue = (value: number) => `${value < 10 ? "0" + value : value}`.split('.')[0]

        return `${getFormattedValue(minutes)}:${getFormattedValue(seconds)}`
    }, [])

    
    const currentTime = useMemo(() => {
        return getSecondsToVideoTime(currentProgress)
    }, [currentProgress, getSecondsToVideoTime])
    
    
        
    const totalTime = useMemo(() => {
        return getSecondsToVideoTime(duration)
    }, [duration, getSecondsToVideoTime])

    return <Text
            fontSize={'16px'}
            fontWeight={400}
            fontStyle={'normal'}
            color={'#FFFFFF'} >
                {currentTime} / {totalTime}
            </Text>
}


export default DisplayTime;
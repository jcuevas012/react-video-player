import { Box } from "@chakra-ui/react"
import React, { useMemo } from "react"


interface DisplayTimeProps {
    id: string
    duration: number
    currentProgress: number
}


const DisplayTime : React.FC<DisplayTimeProps> = ({ id, currentProgress, duration }) => {


    const getFormatTime = (time: number) => {
        let minutes = Math.floor(time / 60);   
        let seconds = Math.floor(time % 60);
        return `${minutes}:${seconds}`
    }
    
    const currentTime = useMemo(() => {
        return getFormatTime(currentProgress)
    }, [currentProgress])
    
    
        
    const totalTime = useMemo(() => {
        return getFormatTime(duration)
    }, [duration])

    return  <Box id={id}>
                <p>{currentTime}/{totalTime}</p>
            </Box>
}


export default DisplayTime;
import { Box } from "@chakra-ui/react"
import React from "react"


interface DisplayTimeProps {
    id: string
    duration: number
    currentProgress: number
}


const DisplayTime : React.FC<DisplayTimeProps> = ({ id, currentProgress, duration }) => {


    return  <Box id={id}>
                <p>{currentProgress}/{duration}</p>
            </Box>
}


export default DisplayTime;
import React from "react"
import { Button } from "@chakra-ui/react";


interface PlayButtonProps {
    id: string
    onClick: () => void
    isPlaying: boolean
}


const PlayButton: React.FC<PlayButtonProps> = ({ id, onClick, isPlaying }) => {

    return  <Button id={id} colorScheme='teal' variant='outline' onClick={onClick}>
                {isPlaying  ? 'Pause' : 'Play'}
            </Button>
}


export default PlayButton;
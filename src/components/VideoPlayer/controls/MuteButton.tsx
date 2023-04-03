import React from "react"
import { Button } from "@chakra-ui/react";


interface MuteButtonProps {
    id: string
    onClick: () => void
    muted: boolean
}


const MuteButton: React.FC<MuteButtonProps> = ({ id, onClick, muted }) => {

    return  <Button id={id} colorScheme='teal' variant='outline' onClick={onClick}>
                {muted ? 'Unmuted' : 'Muted'}
            </Button>
}


export default MuteButton;
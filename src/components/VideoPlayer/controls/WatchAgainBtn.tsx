import React from "react"
import { Button } from "@chakra-ui/react";


interface WatchAgainButtonProps {
    id: string
    onClick: () => void
    isVideoEnd: boolean
}


const WatchAgainButton: React.FC<WatchAgainButtonProps> = ({ id, onClick, isVideoEnd }) => {

    return isVideoEnd ? null :
            <Button id={id} colorScheme='teal' variant='outline' onClick={onClick}>
                Watch Again
            </Button>
}


export default WatchAgainButton;
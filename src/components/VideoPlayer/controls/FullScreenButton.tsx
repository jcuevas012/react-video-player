import React from "react"
import { Button } from "@chakra-ui/react";


interface FullScreenButtonProps {
    id: string
    onClick: () => void
}


const FullScreenButton: React.FC<FullScreenButtonProps> = ({ id, onClick }) => {

    return  <Button id={id} colorScheme='teal' variant='outline' onClick={onClick}>
                Full Screen
            </Button>
}


export default FullScreenButton;
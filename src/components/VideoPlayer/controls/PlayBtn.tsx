import React from "react"
import { Button, Icon } from "@chakra-ui/react";

 enum ButtonType {
    BUTTON,
    ICON
}

interface PlayButtonProps {
    id: string
    onClick: () => void
    isPlaying: boolean
    type?: ButtonType
}


const PlayButton: React.FC<PlayButtonProps> = ({ id, onClick, isPlaying, type = ButtonType.BUTTON }) => {

     const PlayIcon = () => {
        return <path d="M23.7165 14.9285C25.6574 16.0939 25.6574 18.9071 23.7165 20.0725L9.25 28.7588L9.25 6.24219L23.7165 14.9285Z" fill="white"/>    
     }   

     const PauseIcon = () => {
        return <>
                <path d="M22.4431 7C23.8553 7 25.0001 8.14482 25.0001 9.55702L25.0001 28L19.8861 28L19.8861 9.55702C19.8861 8.14482 21.0309 7 22.4431 7Z" fill="white"/>
                <path d="M12.557 7C13.9692 7 15.114 8.14482 15.114 9.55702L15.114 28L10 28L10 9.55702C10 8.14482 11.1448 7 12.557 7Z" fill="white"/>            
               </>
        
     }   

    return  type === ButtonType.BUTTON ?
                <Button id={id} colorScheme='teal' opacity={10} variant='outline' onClick={onClick}>
                    {isPlaying  ? 'Pause' : 'Play'}
                </Button>
                :
                <Icon
                    cursor="pointer"
                    onClick={onClick}
                    width="35px" 
                    height="35px" 
                    viewBox="0 0 35 35" 
                    fill="none"
                >
                    { isPlaying ? <PauseIcon/> : <PlayIcon/> }    
                </Icon>    
}

export { ButtonType }

export default PlayButton;
import React from "react"
import { Button, Icon } from "@chakra-ui/react";

 enum PlayBtnType {
    BUTTON,
    ICON
}

interface PlayButtonProps {
    id: string
    onClick: () => void
    isPlaying: boolean
    type?: PlayBtnType
}


const PlayButton: React.FC<PlayButtonProps> = ({ id, onClick, isPlaying, type = PlayBtnType.BUTTON }) => {

     const PlayIcon = () => {
        return <path d="M23.7165 14.9285C25.6574 16.0939 25.6574 18.9071 23.7165 20.0725L9.25 28.7588L9.25 6.24219L23.7165 14.9285Z" fill="white"/>    
     }   

     const PauseIcon = () => {
        return <>
                <path d="M22.4431 7C23.8553 7 25.0001 8.14482 25.0001 9.55702L25.0001 28L19.8861 28L19.8861 9.55702C19.8861 8.14482 21.0309 7 22.4431 7Z" fill="white"/>
                <path d="M12.557 7C13.9692 7 15.114 8.14482 15.114 9.55702L15.114 28L10 28L10 9.55702C10 8.14482 11.1448 7 12.557 7Z" fill="white"/>            
               </>
        
     }   

    return  type === PlayBtnType.BUTTON ?
                <Button 
                  id={id} 
                  _hover={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                  }}
                  width={100}
                  height={100}
                  border="solid"
                  borderWidth={"2px"}
                  borderRadius={"50%"}
                  variant='outline' 
                  onClick={onClick}
                  borderColor="white"
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  >
                    <Icon
                        width="41.82px" 
                        height="34.82px" 
                        viewBox="0 0 35 35" 
                        fill="none"
                    >
                        {isPlaying ? <PauseIcon/> : <PlayIcon/>}
                    </Icon>
                </Button>
                :
                <Icon
                    _hover={{ color: "#0865FF", stroke: "#0865FF", fill: "#0865FF" }}
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

export { PlayBtnType }

export default PlayButton;
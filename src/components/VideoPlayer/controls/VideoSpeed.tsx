import React from "react"
import { Button, Menu, MenuButton, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";


interface MuteButtonProps {
    id: string
    onClick: (value: number) => void
    currentVelocity: number
}


const VideoSpeed: React.FC<MuteButtonProps> = ({ id, onClick, currentVelocity }) => {


       const onSeedClick = (value: number) => {
            onClick(value)
       } 

    return  <Menu id={id}>
                <MenuButton as={Button}>
                    {currentVelocity}x
                </MenuButton>
                <MenuList>
                <MenuGroup title='Playback Speed'>
                    <MenuItem onClick={() => onSeedClick(0.5)}>0.5x</MenuItem>
                    <MenuItem onClick={() => onSeedClick(1)} >1x</MenuItem>
                    <MenuItem onClick={() => onSeedClick(1.5)} >1.5x</MenuItem>
                    <MenuItem onClick={() => onSeedClick(2)} >2x</MenuItem>
                </MenuGroup>
                    
                </MenuList>
            </Menu>
}


export default VideoSpeed;
import React from "react"
import { Icon } from "@chakra-ui/react";


interface FullScreenButtonProps {
    id: string
    onClick: () => void
}


const FullScreenButton: React.FC<FullScreenButtonProps> = ({ id, onClick }) => {

    return  <Icon 
                _hover={{ color: "#0865FF", stroke: "#0865FF", fill: "#0865FF" }}
                cursor="pointer"
                aria-label="full-screen" 
                id={id} 
                onClick={onClick} 
                width="32px" 
                height="33px" 
                viewBox="0 0 32 33" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                ml={8}
                 >
                <path d="M8.75022 23.7644L13.5135 19.0012" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M13.3846 24.8927L7.73117 24.7836L7.62207 19.1302" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23.5127 9.00652L18.7494 13.7698" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="round"/>
                <path d="M18.8779 7.87534L24.5313 7.98444L24.6404 13.6378" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    
            </Icon>
}


export default FullScreenButton;
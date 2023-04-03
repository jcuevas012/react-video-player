import React from "react"
import { Icon } from "@chakra-ui/react";

interface MuteButtonProps {
    id: string
    onClick: () => void
    muted: boolean
}


const MuteButton: React.FC<MuteButtonProps> = ({ id, onClick, muted }) => {

    const VolumeHigh = () => {
        return (<>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5579 20.9303H6.66839C4.6424 20.9303 3 19.2879 3 17.2619C3 15.2359 4.6424 13.5935 6.6684 13.5935H11.5513L19.5075 9L19.5075 25.52L11.5579 20.9303Z" fill="white"/>
                    <path d="M24.0039 14.0801C24.8101 15.2142 25.2391 16.5369 25.2391 17.8885C25.2391 19.2401 24.8101 20.5627 24.0039 21.6969" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path d="M28.6587 12.3848C29.8232 14.0229 30.4428 15.9335 30.4428 17.8858C30.4428 19.8381 29.8232 21.7486 28.6587 23.3868" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                </>
        )
    }

    const VolumeMute = () => {
        return (<>
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5579 20.9303H6.66839C4.6424 20.9303 3 19.2879 3 17.2619C3 15.2359 4.6424 13.5935 6.6684 13.5935H11.5513L19.5075 9V25.52L11.5579 20.9303Z" fill="white"/>
                    <path d="M23.2422 21.7075C22.8406 21.3059 22.8406 20.6546 23.2422 20.2529L30.0305 13.4647L31.4851 14.9193L24.6969 21.7075C24.2952 22.1092 23.6439 22.1092 23.2422 21.7075Z" fill="white"/>
                    <path d="M23.2423 14.192C22.8406 14.5937 22.8406 15.245 23.2423 15.6467L30.0305 22.4349L31.4851 20.9803L24.6969 14.192C24.2952 13.7904 23.6439 13.7904 23.2423 14.192Z" fill="white"/>
                </>
        )
    }


      const VolumeLow = () => {
        return (<>
                   <path fillRule="evenodd" clipRule="evenodd" d="M11.5579 20.9303H6.66839C4.6424 20.9303 3 19.2879 3 17.2619C3 15.2359 4.6424 13.5935 6.6684 13.5935H11.5513L19.5075 9V25.52L11.5579 20.9303Z" fill="white"/>
                    <path d="M24.0039 14.0801C24.8101 15.2142 25.2391 16.5369 25.2391 17.8885C25.2391 19.2401 24.8101 20.5627 24.0039 21.6969" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round"/>
                </>
        )
    }



    return  <Icon 
                cursor="pointer"    
                aria-label="mute" 
                id={id} 
                mr={'4px'}
                ml={'4px'}
                onClick={onClick} 
                width="35" 
                height="35" 
                viewBox="0 0 35 35" 
                fill="none" xmlns="http://www.w3.org/2000/svg"
                 >
                    {muted ? <VolumeMute/> : <VolumeHigh/>}
                    
            </Icon>
}


export default MuteButton;
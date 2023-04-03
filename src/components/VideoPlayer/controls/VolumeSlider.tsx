import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react"
import React from "react"


interface VolumeSliderProps {
    id: string
    volume: number;
    onVolumeChange: (volume: number) => void
}


const VolumeSlider : React.FC<VolumeSliderProps> = ({ id, onVolumeChange, volume }) => {

    const onChange = (value: number) => {
        const volume = value === 10 ? 1.0 : parseFloat(`0.${value}`)
        onVolumeChange(volume)
    }

    return  <Slider
                width={"72px"}
                min={0}
                max={10} 
                colorScheme="pink"
                id={id} 
                onChange={onChange} 
                defaultValue={volume}
                >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
}


export default VolumeSlider;
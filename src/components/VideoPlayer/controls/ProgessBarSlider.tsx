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
                min={0}
                max={10} 
                id={id} 
                onChange={onChange} 
                >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
}


export default VolumeSlider;
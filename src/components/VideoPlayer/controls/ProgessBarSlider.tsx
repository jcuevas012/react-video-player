import { Slider, SliderFilledTrack, SliderTrack } from "@chakra-ui/react"
import React from "react"


interface ProgressBarSliderProps {
    id: string
    progress: number;
    duration: number;
    handleManualProgress: (volume: number) => void
}


const ProgressBarSlider : React.FC<ProgressBarSliderProps> = ({ id, progress, duration, handleManualProgress }) => {


    const onChange = (value: number) => {
        console.log('---------->>>', value)
        handleManualProgress(value)
    }

    console.log(duration)

    return  <Slider
                min={0}
                max={duration} 
                onChange={onChange}
                id={id} 
                value={progress}
                >
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
            </Slider>
}


export default ProgressBarSlider;
import { Slider, SliderFilledTrack, SliderTrack } from "@chakra-ui/react"

interface ProgressBarSliderProps {
    id: string
    progress: number;
    handleManualProgress: (volume: number) => void
}


const ProgressBarSlider : React.FC<ProgressBarSliderProps> = ({ id, progress, handleManualProgress, ...rest }) => {

    const onChange = (value: number) => {
        handleManualProgress(value)
    }

    return  <Slider
                style={{
                    position: "absolute"
                }}
                colorScheme="pink"
                min={0}
                max={100} 
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
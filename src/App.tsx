import  React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Container,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {VideoPlayer} from "./components/VideoPlayer"
import customTheme from "./theme"

const VIDEO_SOURCE = 'https://ours-wellness-testing-public.s3.us-west-2.amazonaws.com/video-1080+(1).mp4'



const VideoPlayerWrapper = () => {
  return  (
          <Container>
              <VideoPlayer
                source={VIDEO_SOURCE}
                id={'firstPlayer'}
              />
          </Container>
            
         )
}



export const App = () => (
<ChakraProvider theme={customTheme}>
      <Grid    minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <VideoPlayerWrapper/>
      </Grid>
  </ChakraProvider>
)

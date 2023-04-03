import  React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
  Container,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {VideoPlayer} from "./components/VideoPlayer"

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
<ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <VideoPlayerWrapper/>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)

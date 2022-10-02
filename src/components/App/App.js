import { Box, ChakraProvider, Heading } from '@chakra-ui/react'
import AddTask from '../AddTask/AddTask';

function App() {
  return (
    <ChakraProvider>
      <Box bgGradient="linear(to-l, #7928CA, #FF0080)" p={4} color='white'>
        <Heading as='h1'>ᛖᚱ Eir</Heading>
      </Box>
      <AddTask />
    </ChakraProvider>
  );
}

export default App;

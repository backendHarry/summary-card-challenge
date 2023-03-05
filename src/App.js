import React from 'react';
import { Box, Flex, VStack, Center } from '@chakra-ui/react';
import Results from './components/Results';

function App() {
  return (
    <Box h="100vh" display={['block', 'flex']} as="section">
      <Flex
        margin="auto"
        w={['100%', '50%']}
        h={['100%', '50%']}
        flexDir="column"
      >
        <Box>
          <Center>
            <h1>Hellow worldww</h1>
          </Center>
        </Box>
        <Box>
          <h1>Hello world</h1>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Box, Flex, VStack, Center, Text } from '@chakra-ui/react';
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
          <Text fontWeight="1st" as="h1">
            Testing fonts configuration
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

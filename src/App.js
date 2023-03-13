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
        <Results />
        <Text fontWeight="1st" as="h1">
          Testing fonts configuration
        </Text>
      </Flex>
    </Box>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Box, Flex, Text } from '@chakra-ui/react';
import Results from './components/Results';
import Summary from './components/Summary';

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
        <Box h="100%">
          <Box w="80%" margin="1.2rem auto">
            <Text color="dark-gray-blue" fontWeight="2nd">
              Summary
            </Text>
            <Summary />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

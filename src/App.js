import React from 'react';
import './App.css';
import { Box, Flex, Text, Button, Center } from '@chakra-ui/react';
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
          <Box w="85%" margin="1.2rem auto">
            <Text color="dark-gray-blue" fontWeight="2nd" mb="1.2rem">
              Summary
            </Text>
            <Summary />
            <Center>
              <Button
                mt="1rem"
                width="100%"
                bgColor="dark-gray-blue"
                color="neutral-color"
                p="1.8rem"
                borderRadius="30px"
                as="h2"
                fontWeight="1st"
                fontSize="1.1rem"
              >
                Continue
              </Button>
            </Center>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

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
        w={['100%', '45%']}
        h={['100%', '65%']}
        flexDir={['column', 'row']}
        boxShadow={[
          'none',
          `-webkit-box-shadow: 14px 9px 63px -14px rgba(120,87,255,0.34);
        -moz-box-shadow: 14px 9px 63px -14px rgba(120,87,255,0.34);
        box-shadow: 14px 9px 63px -14px rgba(120,87,255,0.34);`,
        ]}
        borderBottomRadius="25px"
        borderTopRadius={['0px', '25px']}
      >
        {/* results component */}
        <Results
          width={['100%', '50%']}
          h={['44%', '100%']}
          paddingTop="1.2rem"
          paddingBottom="1.2rem"
          borderBottomRadius="25px"
          borderTopRadius={['0px', '25px']}
        />
        {/* end component */}
        <Box
          h={['53%', '100%']}
          width={['100%', '50%']}
          pb="2rem"
          borderBottomRadius="25px"
          borderTopRadius={['0px', '25px']}
        >
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

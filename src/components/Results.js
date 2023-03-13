import { React } from 'react';
import { Box, Text, Circle, VStack, Flex } from '@chakra-ui/react';

const Results = () => {
  return (
    <Box
      h="47%"
      paddingTop="1.2rem"
      paddingBottom="1.2rem"
      borderBottomRadius="25px"
      bgGradient="linear(to-b, slate-blue-gradient-background, royal-blue-gradient-background)"
    >
      <Flex h="100%" align="center" direction="column" color="light-lavender">
        <Text fontWeight="1st" fontSize="1.2rem">
          Your Result
        </Text>
        <Circle
          bgGradient="linear(to-b, violet-blue-gradient-circle, persian-blue-gradient-circle)"
          size="8rem"
          marginTop="1rem"
        >
          <VStack spacing="0px">
            <Text
              as="h1"
              fontSize="3rem"
              fontWeight="2nd"
              color="neutral-color"
            >
              76
            </Text>
            <Text fontSize="1rem" fontWeight="1st" opacity=".6">
              of 100
            </Text>
          </VStack>
        </Circle>
        <Box w="80%" margin="auto" textAlign="center">
          <Text
            as="h2"
            fontWeight="1st"
            fontSize="1.5rem"
            letterSpacing=".3px"
            color="neutral-color"
          >
            Great
          </Text>
          <Text fontSize="1rem" fontWeight="1st" marginTop=".5rem" opacity=".8">
            You scored higher than 65% of the people who have taken these tests.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Results;

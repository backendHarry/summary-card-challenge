import React from 'react';
import { Flex, HStack, Icon, Text } from '@chakra-ui/react';
import {
  MemoryIcon,
  ReactionIcon,
  VerbalIcon,
  VisualIcon,
} from '../assets/icons/icons';

export const SummaryList = props => {
  const { icon, children, ...rest } = props;
  return (
    <Flex as="li" w="100%" align="center" justify="space-between" {...rest}>
      <HStack spacing={4}>
        <Icon as={icon} w={22} h={22} />
        <Text>{children}</Text>
      </HStack>
      <Text color="dark-gray-blue">
        82 /
        <Text display="inline-flex" textIndent="4px" opacity=".5">
          100
        </Text>
      </Text>
    </Flex>
  );
};

const Summary = () => {
  const summaryList = [
    {
      category: 'Reaction',
      score: 92,
      icon: ReactionIcon,
      color: 'light-red',
    },
    {
      category: 'Memory',
      score: 80,
      icon: MemoryIcon,
      color: 'orange-yellow',
    },
    {
      category: 'Verbal',
      score: 61,
      icon: VerbalIcon,
      color: 'green-teal',
    },
    {
      category: 'Visual',
      score: 72,
      icon: VisualIcon,
      color: 'cobalt-blue',
    },
  ];
  return (
    <>
      {summaryList.map(({ category, icon, color }) => (
        <SummaryList
          icon={icon}
          color={color}
          bgColor={`${color}-background`}
          p=".8rem"
          borderRadius="10px"
          mb=".8rem"
          fontSize="1rem"
          fontWeight="2nd"
        >
          {category}
        </SummaryList>
      ))}
    </>
  );
};

export default Summary;

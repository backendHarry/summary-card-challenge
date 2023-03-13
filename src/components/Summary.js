import React, { useState } from 'react';
import { Box, HStack, Icon, Text } from '@chakra-ui/react';
import {
  MemoryIcon,
  ReactionIcon,
  VerbalIcon,
  VisualIcon,
} from '../assets/icons/icons';

export const SummaryList = props => {
  const { icon, children, ...rest } = props;
  return (
    <HStack as="li" {...rest}>
      <Icon as={icon} w={22} h={22} />
      <Text>{children}</Text>
    </HStack>
  );
};

const Summary = () => {
  const summaryList = [
    {
      category: 'Memory',
      score: 92,
      icon: MemoryIcon,
    },
    {
      category: 'Reaction',
      score: 80,
      icon: ReactionIcon,
    },
    {
      category: 'Verbal',
      score: 61,
      icon: VerbalIcon,
    },
    {
      category: 'Visual',
      score: 72,
      icon: VisualIcon,
    },
  ];
  return (
    <>
      {summaryList.map(({ category, icon }) => (
        <SummaryList icon={icon}>{category}</SummaryList>
      ))}
    </>
  );
};

export default Summary;

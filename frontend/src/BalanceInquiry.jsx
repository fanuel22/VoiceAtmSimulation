import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function BalanceInquiry({ onBack }) {
  const balance = 1234.56; 

  return (
    <Box p={8}>
      <Button onClick={onBack} mb={4}>
        Back
      </Button>
      <Heading mb={4}>Balance Inquiry</Heading>
      <Text fontSize="xl">Your current balance is: ${balance}</Text>
    </Box>
  );
}

export default BalanceInquiry;
import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Text,
} from '@chakra-ui/react';


function CashWithdrawal({ onBack }) {
  const [amount, setAmount] = useState('');

  const handleWithdraw = () => {
    // TODO: Implement cash withdrawal logic
  };

  return (
    <Box p={8}>
      <Button onClick={onBack} mb={4}>
        Back
      </Button>
      <Heading mb={4}>Cash Withdrawal</Heading>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="green" onClick={handleWithdraw}>
          Withdraw
        </Button>
      </VStack>
    </Box>
  );
}

export default CashWithdrawal;
import { Box, Button, Text } from '@chakra-ui/react';

function ServiceItem({ service , colorMode ,gridColumn}) {
  const handleClick = () => {
    // TODO: 
  };

  return (
    <Button
      size="lg"
      variant="solid"
      bgGradient={
        colorMode === 'light'
          ? 'linear(to-bl, gray.600, gray.300)'
          : 'linear(to-bl, gray.400, gray.700)'
      }
      color={colorMode === 'light' ? 'white' : 'black'}
      onClick={handleClick}
      px={4} 
      py={8} 
      border="2px solid"
      borderColor={
        colorMode === 'light' ? 'gray.700' : 'gray.300'
      }
      borderRadius="md"
      boxShadow="0px 5px 15px -5px rgba(0, 0, 0, 0.5)" 
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: '0px 10px 20px -5px rgba(0, 0, 0, 0.7)', 
      }}
      _active={{
        transform: 'scale(1.02)',
        boxShadow: '0px 2px 5px -2px rgba(0, 0, 0, 0.5)', 
      }}
      w="100%"
      gridColumn={gridColumn} 
      fontSize="xl"
      fontWeight="bold"
    >
      {service.name}
    </Button>
  );
}

export default ServiceItem;

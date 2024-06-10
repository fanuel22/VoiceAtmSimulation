import {
    Grid,
    Box,
    Heading,
  Center,
    Text,
    Button,
    IconButton,
    useColorMode
  } from '@chakra-ui/react';
  import { ChevronLeftIcon,MoonIcon, SunIcon } from '@chakra-ui/icons'; 
  import ServiceItem from './ServiceItem';
  
const services = [
  { id: 1, name: 'Cash Withdrawal' },
  { id: 2, name: 'Balance Inquiry' },
  { id: 3, name: 'Transfer' },
  { id: 4, name: 'Change Card Settings' },
  { id: 5, name: 'Help' }, 
  
];

function Services({ onBack }) { 
    const { colorMode, toggleColorMode } = useColorMode();
  
   return (
    <Box h="100vh" w="100vw" bgGradient="linear(to-r, blue.200, blue.500)">
      <IconButton
        aria-label="Go back"
        icon={<ChevronLeftIcon />}
        onClick={onBack}
        position="absolute"
        top={4}
        left={4}
      />
      
      <Center>
        <Heading size="2xl" mb={8} color={colorMode === 'light' ? 'white' : 'gray.800'}>
          SERVICES
        </Heading>
      </Center>

      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        position="absolute"
        top={4}
        right={4}
      />
    
      <Box p={8} maxW="container.xl" mx="auto"> 
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={6} 
        >
          {services.map((service, index) => (
            <ServiceItem
              key={service.id}
              service={service}
              colorMode={colorMode}
              gridColumn={index % 2 === 0 ? 1 : 2}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
  
export default Services;
import { Box, Text, Image, Button, VStack, Heading } from '@chakra-ui/react';
import { FaMusic, FaTicketAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <FaMusic size="3em" color="#2a69ac" />
      <Heading as="h1" size="xl" mt={6} mb={2}>
        Band Tour Central
      </Heading>
      <Text fontSize="xl">
        Your one-stop hub for all tour dates, ticket bookings, and exclusive band content!
      </Text>
      <Image src="https://via.placeholder.com/600x400" alt="Band Image" my={4} borderRadius="md" />
      <VStack spacing={4}>
        <Button rightIcon={<FaTicketAlt />} colorScheme="blue" variant="solid">
          Buy Tickets
        </Button>
        <Button rightIcon={<FaTicketAlt />} colorScheme="gray" variant="outline">
          View Tour Dates
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
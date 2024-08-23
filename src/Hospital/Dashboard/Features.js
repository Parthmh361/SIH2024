import React from 'react';
import { Box, SimpleGrid, Heading, Text, Icon, VStack, useColorModeValue } from '@chakra-ui/react';
import { AtSignIcon, InfoOutlineIcon, StarIcon, WarningIcon, AddIcon, CalendarIcon, SettingsIcon } from '@chakra-ui/icons';
import { MdLocalHospital, MdNotificationsActive } from 'react-icons/md';

const features = [
  { icon: AtSignIcon, title: 'Manage Patients', description: 'Easily manage patient records, appointments, and medical history.' },
  { icon: CalendarIcon, title: 'Doctors Directory', description: 'Access and manage the list of all doctors in the hospital.' },
  { icon: AddIcon, title: 'Stock Management', description: 'Track and manage inventory of medicines and other medical supplies.' },
  { icon: MdLocalHospital, title: 'Bed Management', description: 'Monitor and manage hospital bed availability and assignments.' },
  { icon: MdNotificationsActive, title: 'Notifications', description: 'Stay informed with real-time notifications and alerts.' },
];

const Features = ({ sidebarCollapsed }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box
      w={{ base: "full", md: `calc(100% - ${sidebarCollapsed ? '5rem' : '16rem'})` }}
      ml={{ base: 0, md: sidebarCollapsed ? '5rem' : '16rem' }}
      p={6}
      transition="margin-left 0.2s ease"
    >
      <Heading as="h2" size="lg" mb={6}>
        Dashboard Features
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {features.map((feature, index) => (
          <Box
            key={index}
            p={6}
            bg={cardBg}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: 'lg' }}
            transition="box-shadow 0.2s ease"
          >
            <VStack spacing={3}>
              <Icon as={feature.icon} boxSize={8} color="blue.500" />
              <Heading as="h3" size="md" color={textColor}>
                {feature.title}
              </Heading>
              <Text color={textColor} textAlign="center">
                {feature.description}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Features;

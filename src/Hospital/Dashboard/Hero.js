import React from 'react';
import { Box, VStack, Text, Alert, AlertIcon, AlertTitle, AlertDescription, CloseButton } from '@chakra-ui/react';
import { WarningIcon, InfoIcon, CheckCircleIcon } from '@chakra-ui/icons';

const Hero = ({ sidebarCollapsed }) => (
  <Box
    w={{ base: "full", md: `calc(100% - ${sidebarCollapsed ? '5rem' : '16rem'})` }}
    bgGradient="linear(to-r, blue.500, purple.500)"
    color="white"
    py={12}
    px={6}
    ml={{ base: 0, md: sidebarCollapsed ? '5rem' : '16rem' }}
    transition="margin-left 0.2s ease"
    overflowX="hidden"
  >
    <VStack spacing={8} align="start">
      <Text fontSize="4xl" fontWeight="bold">
        Hospital Operations Dashboard
      </Text>
      <Text fontSize="lg">
        Stay updated with the latest notifications and alerts from various departments.
      </Text>

      {/* Alerts Section */}
      <VStack spacing={4} w="full" align="start">
        {/* Medicine Shortage Alert */}
        <Alert status="warning" variant="solid" borderRadius="md" boxShadow="md">
          <AlertIcon as={WarningIcon} />
          <VStack align="start" spacing={1} flex="1">
            <AlertTitle>Medicine Shortage!</AlertTitle>
            <AlertDescription>
              The following medicines are running low: Paracetamol, Ibuprofen. Please restock immediately.
            </AlertDescription>
          </VStack>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>

        {/* Bed Availability Alert */}
        <Alert status="info" variant="subtle" borderRadius="md" boxShadow="md">
          <AlertIcon as={InfoIcon} />
          <VStack align="start" spacing={1} flex="1">
            <AlertTitle>Bed Availability</AlertTitle>
            <AlertDescription>
              There are currently 5 ICU beds and 10 general beds available. Please update the system as soon as beds are assigned.
            </AlertDescription>
          </VStack>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>

        {/* Collaboration Success Alert */}
        <Alert status="success" variant="solid" borderRadius="md" boxShadow="md">
          <AlertIcon as={CheckCircleIcon} />
          <VStack align="start" spacing={1} flex="1">
            <AlertTitle>Collaboration Success!</AlertTitle>
            <AlertDescription>
              Successfully collaborated with City Hospital for patient transfers.
            </AlertDescription>
          </VStack>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      </VStack>
    </VStack>
  </Box>
);

export default Hero;

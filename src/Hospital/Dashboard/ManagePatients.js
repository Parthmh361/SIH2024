import React from 'react';
import { Box, Button, Heading, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, useColorModeValue, IconButton, Flex, Input } from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon, SearchIcon } from '@chakra-ui/icons';

const mockPatients = [
  { id: 1, name: 'John Doe', age: 45, gender: 'Male', diagnosis: 'Flu' },
  { id: 2, name: 'Jane Smith', age: 30, gender: 'Female', diagnosis: 'Allergy' },
  { id: 3, name: 'Bob Johnson', age: 60, gender: 'Male', diagnosis: 'Diabetes' },
];

const ManagePatients = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      p={6}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="md"
      boxShadow="md"
    >
      <Flex mb={6} justify="space-between" align="center">
        <Heading as="h2" size="lg">Manage Patients</Heading>
        <Flex gap={4} align="center">
          <Input
            placeholder="Search patients..."
            value={searchTerm}
            onChange={handleSearch}
            width={{ base: 'full', md: '250px' }}
          />
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            onClick={handleSearch}
            colorScheme="blue"
          />
          <Button
            leftIcon={<AddIcon />}
            colorScheme="teal"
            onClick={onOpen}
          >
            Add Patient
          </Button>
        </Flex>
      </Flex>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Diagnosis</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {filteredPatients.map(patient => (
            <Tr key={patient.id}>
              <Td>{patient.name}</Td>
              <Td>{patient.age}</Td>
              <Td>{patient.gender}</Td>
              <Td>{patient.diagnosis}</Td>
              <Td>
                <Flex gap={2}>
                  <IconButton
                    icon={<EditIcon />}
                    aria-label="Edit"
                    colorScheme="blue"
                  />
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete"
                    colorScheme="red"
                  />
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Add Patient Modal */}
      {/* Implement modal to add/edit patient details here if needed */}
    </Box>
  );
};

export default ManagePatients;

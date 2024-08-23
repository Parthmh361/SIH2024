import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Switch,
  Checkbox,
  Text,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';

const Registration = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isStaffLogin, setIsStaffLogin] = useState(false);
  const [isStaffSignup, setIsStaffSignup] = useState(false);

  const toggleFormType = () => setIsLoginForm(!isLoginForm);

  return (
    <Box
      bg={useColorModeValue('whiteAlpha.900', 'gray.700')}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      maxW="500px"
      w="100%"
      mx="auto"
      mt="8"
    >
      {isLoginForm ? (
        <VStack spacing={6} align="stretch">
          <Heading textAlign="center" fontSize="2xl">Please Sign In</Heading>

          <HStack>
            <Button
              flex={1}
              colorScheme={isStaffLogin ? 'gray' : 'blue'}
              variant={isStaffLogin ? 'outline' : 'solid'}
              onClick={() => setIsStaffLogin(false)}
            >
              Patient
            </Button>
            <Button
              flex={1}
              colorScheme={isStaffLogin ? 'blue' : 'gray'}
              variant={isStaffLogin ? 'solid' : 'outline'}
              onClick={() => setIsStaffLogin(true)}
            >
              Staff
            </Button>
          </HStack>

          <FormControl>
            <FormLabel>{isStaffLogin ? 'Employee ID' : 'Email Address'}</FormLabel>
            <Input placeholder={isStaffLogin ? 'Employee ID' : 'name@example.com'} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>

          <Checkbox defaultChecked>Remember me</Checkbox>

          <Button colorScheme="blue" w="full">Sign In</Button>

          <Text textAlign="center" mt={4}>
            Don’t have an account?{' '}
            <Button variant="link" colorScheme="blue" onClick={toggleFormType}>
              Sign Up
            </Button>
          </Text>
        </VStack>
      ) : (
        <VStack spacing={6} align="stretch">
          <Heading textAlign="center" fontSize="2xl">Sign Up</Heading>

          <HStack>
            <Button
              flex={1}
              colorScheme={isStaffSignup ? 'gray' : 'blue'}
              variant={isStaffSignup ? 'outline' : 'solid'}
              onClick={() => setIsStaffSignup(false)}
            >
              Patient
            </Button>
            <Button
              flex={1}
              colorScheme={isStaffSignup ? 'blue' : 'gray'}
              variant={isStaffSignup ? 'solid' : 'outline'}
              onClick={() => setIsStaffSignup(true)}
            >
              Staff
            </Button>
          </HStack>

          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="Full Name" />
          </FormControl>

          <FormControl>
            <FormLabel>{isStaffSignup ? 'Employee ID' : 'Email Address'}</FormLabel>
            <Input placeholder={isStaffSignup ? 'Employee ID' : 'name@example.com'} />
          </FormControl>

          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Confirm Password" />
          </FormControl>

          <Button colorScheme="blue" w="full">Sign Up</Button>

          <Text textAlign="center" mt={4}>
            Already have an account?{' '}
            <Button variant="link" colorScheme="blue" onClick={toggleFormType}>
              Sign In
            </Button>
          </Text>
        </VStack>
      )}
    </Box>
  );
};

export default Registration;

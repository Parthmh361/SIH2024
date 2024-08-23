import React from 'react';
import {
  VStack, Flex, Avatar, HStack, IconButton, Box, Text, InputGroup,
  InputLeftElement, Input, Icon, Menu, MenuButton, MenuList, MenuItem, Button,
  Drawer,
  DrawerOverlay,
  DrawerContent
} from '@chakra-ui/react';
import {
  HamburgerIcon, BellIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon, SettingsIcon, ExternalLinkIcon
} from '@chakra-ui/icons';

const SidebarContent = ({ onClose, collapsed }) => (
  <VStack
    w={collapsed ? "20" : "64"}
    pos="fixed"
    h="full"
    bg="gray.100"
    borderRightWidth="1px"
    spacing={4}
    pt={5}
    alignItems={collapsed ? "center" : "flex-start"}
    transition="width 0.2s ease"
  >
    {/* Profile Section */}
    <Flex direction="column" alignItems={collapsed ? "center" : "flex-start"} px={4} w="full">
      <Avatar size="md" name="John Doe" src="https://bit.ly/broken-link" mb={4} />
      {!collapsed && (
        <Box>
          <Text fontWeight="bold">John Doe</Text>
          <Text fontSize="sm" color="gray.500">Administrator</Text>
        </Box>
      )}
    </Flex>

    {/* Search Bar */}
    {!collapsed && (
      <InputGroup px={4}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" />}
          height="100%"
        />
        <Input
          type="text"
          placeholder="Search..."
          borderRadius="md"
          height="100%"
          pr={4}
        />
      </InputGroup>
    )}

    {/* Sidebar Links */}
    <Box as="a" href="#" w="full">
      <HStack px={collapsed ? 2 : 4} py={3} _hover={{ bg: 'gray.200' }} justifyContent={collapsed ? "center" : "flex-start"}>
        <Icon viewBox="0 0 24 24" boxSize="6" fill="currentcolor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </Icon>
        {!collapsed && <Text>Manage Patients</Text>}
      </HStack>
    </Box>
    <Box as="a" href="#" w="full">
      <HStack px={collapsed ? 2 : 4} py={3} _hover={{ bg: 'gray.200' }} justifyContent={collapsed ? "center" : "flex-start"}>
        <Icon viewBox="0 0 24 24" boxSize="6" fill="currentcolor">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.11 0-2 .9-2 2v16c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1-1-.45 1-1-1 1 1 1 1zm2 14h-4v-2h4v2zm3-4H7V7h10v6z" />
        </Icon>
        {!collapsed && <Text>Doctors</Text>}
      </HStack>
    </Box>
    <Box as="a" href="#" w="full">
      <HStack px={collapsed ? 2 : 4} py={3} _hover={{ bg: 'gray.200' }} justifyContent={collapsed ? "center" : "flex-start"}>
        <Icon viewBox="0 0 24 24" boxSize="6" fill="currentcolor">
          <path d="M16 9V5h-1V4H9v1H8v4H7v6h10V9h-1zm-7-2h6v2h-6V7zm7 8H8v-4h8v4z" />
        </Icon>
        {!collapsed && <Text>Stock Management</Text>}
      </HStack>
    </Box>
    <Box as="a" href="#" w="full">
      <HStack px={collapsed ? 2 : 4} py={3} _hover={{ bg: 'gray.200' }} justifyContent={collapsed ? "center" : "flex-start"}>
        <BellIcon boxSize={6} />
        {!collapsed && <Text>Notifications</Text>}
      </HStack>
    </Box>

    {/* Settings and Logout */}
    <Box flexGrow={1} />
    <Menu>
      <MenuButton as={Button} px={4} w="full" variant="ghost" justifyContent="flex-start">
        <HStack justifyContent={collapsed ? "center" : "flex-start"}>
          <SettingsIcon />
          {!collapsed && <Text>Settings</Text>}
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem icon={<ExternalLinkIcon />}>Account Settings</MenuItem>
        <MenuItem icon={<ExternalLinkIcon />}>Billing</MenuItem>
      </MenuList>
    </Menu>
    <Box as="a" href="#" w="full" px={4} py={3} _hover={{ bg: 'gray.200' }}>
      <HStack justifyContent={collapsed ? "center" : "flex-start"}>
        <Icon viewBox="0 0 24 24" boxSize="6" fill="currentcolor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </Icon>
        {!collapsed && <Text>Logout</Text>}
      </HStack>
    </Box>
  </VStack>
);

const SideNav = ({ isOpen, onClose, collapsed, onToggle }) => (
  <>
    {/* Main Sidebar */}
    <SidebarContent collapsed={collapsed} />

    {/* Drawer Sidebar for Mobile */}
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <SidebarContent onClose={onClose} collapsed={collapsed} />
      </DrawerContent>
    </Drawer>

    {/* Toggle Sidebar Button */}
    <IconButton
      icon={collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      onClick={onToggle}
      pos="fixed"
      top={4}
      left={collapsed ? 2 : 64}
      zIndex={10}
      aria-label="Toggle Sidebar"
    />
  </>
);

export default SideNav;

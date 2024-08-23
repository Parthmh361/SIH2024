import React, { useState } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import Hero from './Hero';
import SideNav from './SideNav';

import Features from './Features';

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Box minH="100vh" bg="gray.50">
      <SideNav
        isOpen={isOpen}
        onClose={onClose}
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
      />
      
      {/* Mobile Nav */}
      <Box display={{ base: 'block', md: 'none' }} onClick={onOpen}>
        <SideNav
          isOpen={isOpen}
          onClose={onClose}
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
      </Box>

      {/* Hero Section */}
      <Hero sidebarCollapsed={collapsed} />

       {/* Features Section */}
       <Features sidebarCollapsed={collapsed} />
    </Box>
  );
};

export default Dashboard;

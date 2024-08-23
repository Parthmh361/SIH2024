import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Dashboard from './Hospital/Dashboard/AdminDashboard';
import ManagePatients from './Hospital/Dashboard/ManagePatients';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <React.StrictMode>
     <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/manage-patients" element={<ManagePatients />} />
      </Routes>
    </Router>
    <App />
  </React.StrictMode>
  </ChakraProvider>
);


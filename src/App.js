import AdminDashboard from "./Hospital/Dashboard/AdminDashboard";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
          <AdminDashboard/>
    </ChakraProvider>
 
  );
}

export default App;

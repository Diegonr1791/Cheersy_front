import NavigationProvider from "./providers/navigation";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;

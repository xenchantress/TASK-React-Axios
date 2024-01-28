import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PetList from './PetList';
import PetDetail from './PetDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/:petId" element={<PetDetail />} />
      </Routes>
    </div>
    </QueryClientProvider>
  );
}

export default App;

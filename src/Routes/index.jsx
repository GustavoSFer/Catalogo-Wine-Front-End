import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from '../Pages';
import Details from '../Pages/Details';
import Pedidos from '../Pages/Pedidos';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/detalhes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

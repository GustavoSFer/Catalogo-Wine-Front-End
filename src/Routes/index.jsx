import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from '../Pages';
import Pedidos from '../Pages/Pedidos';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from '../Pages';
import Details from '../Pages/Details';
import CheckoutRequest from '../Pages/CheckoutRequest';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pedidos" element={<CheckoutRequest />} />
        <Route path="/detalhes/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from '../Pages';
import Details from '../Pages/Details';
import CheckoutRequest from '../Pages/CheckoutRequest';
import NotFound from '../Pages/NotFound';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/pedidos" element={<CheckoutRequest />} />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

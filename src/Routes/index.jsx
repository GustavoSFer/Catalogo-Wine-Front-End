import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from '../Pages';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

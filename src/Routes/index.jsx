import React, { Routes, Route, BrowserRouter } from 'react-router-dom';
import Catalogo from '../Pages/Catalogo';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

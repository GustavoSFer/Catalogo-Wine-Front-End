import React from 'react';
import Nav from '../Components/Nav';
import ProvideCatalogo from '../Context/ProvideCatalogo';

function Catalogo() {
  return (
    <ProvideCatalogo>
      <Nav />
    </ProvideCatalogo>
  );
}

export default Catalogo;

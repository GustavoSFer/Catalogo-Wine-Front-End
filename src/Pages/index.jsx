import React from 'react';
import Nav from '../Components/Nav';
import ProvideCatalogo from '../Context/ProvideCatalogo';
import Catalogo from './Catalogo';

function Index() {
  return (
    <ProvideCatalogo>
      <Nav />
      <Catalogo />
    </ProvideCatalogo>
  );
}

export default Index;

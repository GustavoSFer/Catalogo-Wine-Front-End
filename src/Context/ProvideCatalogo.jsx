import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import ContextWine from './ContextWine';
import fetchApiWine from '../Services/requatsApi';

function ProvideCatalogo({ children }) {
  const [products, setProducts] = useState([]);

  const fetchDb = async (number) => {
    const data = await fetchApiWine(number);
    setProducts(data);
  };

  useEffect(() => {
    fetchDb(1);
  }, []);

  const context = React.useMemo(() => ({
    products,
  }), [products]);

  return (
    <ContextWine.Provider value={context}>
      {children}
    </ContextWine.Provider>
  );
}

ProvideCatalogo.defaultProps = { children: '' };
ProvideCatalogo.propTypes = {
  children: PropType.node,
};

export default ProvideCatalogo;

import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import ContextWine from './ContextWine';
import fetchApiWine from '../Services/requatsApi';

function ProvideCatalogo({ children }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchDb = async () => {
    const data = await fetchApiWine(page);
    setProducts(data.items);
  };

  useEffect(() => {
    fetchDb(1);
  }, []);

  const context = React.useMemo(() => ({
    products, setPage,
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

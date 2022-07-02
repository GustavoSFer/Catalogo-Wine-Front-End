import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import ContextWine from './ContextWine';
import fetchApiWine, { fetchApi } from '../Services/requatsApi';

function ProvideCatalogo({ children }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filtroPreco, setFiltroPreco] = useState('');

  const fetchDb = async () => {
    const data = await fetchApiWine(page);
    setProducts(data.items);
  };

  const filtragemPreco = async (type) => {
    const product = await fetchApi();
    const separandoPreco = type.split('-');

    if (type !== '') {
      const filtro = [...product].filter((preco) => (
        preco.price >= separandoPreco[0] && preco.price <= separandoPreco[1]
      ));
      setProducts(filtro);
    }
  };

  useEffect(() => {
    fetchDb(1);
  }, []);

  useEffect(() => {
    filtragemPreco(filtroPreco);
  }, [filtroPreco]);

  const context = React.useMemo(() => ({
    products,
    setPage,
    filtroPreco,
    setFiltroPreco,
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

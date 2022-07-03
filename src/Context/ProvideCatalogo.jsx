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
    if (data) {
      setProducts(data.items);
    }
  };

  const filtragemPreco = async (type) => {
    const separandoPreco = type.split('-');

    if (type !== '') {
      const product = await fetchApi();
      const filtro = [...product].filter((preco) => (
        preco.priceMember > separandoPreco[0] && preco.priceMember <= separandoPreco[1]
      ));
      setProducts(filtro);
    }
  };

  useEffect(() => {
    fetchDb(1);
  }, []);

  useEffect(() => {
    filtragemPreco(filtroPreco);
    // fetchDb(page);
  }, [filtroPreco, page]);

  const context = React.useMemo(() => ({
    products,
    page,
    setPage,
    filtroPreco,
    setFiltroPreco,
    setProducts,
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

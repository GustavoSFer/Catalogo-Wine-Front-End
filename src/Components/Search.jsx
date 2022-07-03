import React, { useState, useContext } from 'react';
import ContextWine from '../Context/ContextWine';
import { fetchApi } from '../Services/requatsApi';

function Search() {
  const [buscar, setBuscar] = useState(false);
  const [txtBusca, setTextBusca] = useState('');
  const { setProducts } = useContext(ContextWine);

  const filterByName = async (name) => {
    const product = await fetchApi();
    if (name) {
      const filtro = [...product].filter((item) => (
        item.name.toLowerCase().includes(name)
      ));
      setProducts(filtro);
    }
  };

  const handleClick = () => {
    setBuscar(true);
  };

  const handleChange = ({ target }) => {
    setTextBusca(target.value);
  };

  const pesquisar = () => {
    filterByName(txtBusca.toLowerCase());
    setBuscar(false);
    setTextBusca('');
    filterByName();
  };

  return (
    <div>
      <button
        className="m-3 btn btn-outline-success"
        type="button"
        onClick={handleClick}
        data-testid="btn-busca-por-nome"
      >
        Busca por nome
      </button>
      { buscar ? (
        <div>
          <input
            type="text"
            value={txtBusca}
            onChange={handleChange}
            data-testid="input-busca"
            className="form-control me-2"
          />
          <button
            type="button"
            className="btn btn-outline-success mt-2"
            onClick={pesquisar}
            data-testid="btn-pesquisar"
          >
            Pesquisar
          </button>
        </div>
      ) : ''}
    </div>
  );
}

export default Search;

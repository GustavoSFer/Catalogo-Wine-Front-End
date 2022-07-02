import React, { useContext, useState } from 'react';
import ContextWine from '../Context/ContextWine';

function Search() {
  const [buscar, setBuscar] = useState(false);
  const [txtBusca, setTextBusca] = useState('');
  const { filterByName } = useContext(ContextWine);

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
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Busca por nome
      </button>
      { buscar ? (
        <div>
          <input type="text" value={txtBusca} onChange={handleChange} />
          <button type="button" onClick={pesquisar}>Pesquisar</button>
        </div>
      ) : ''}
    </div>
  );
}

export default Search;

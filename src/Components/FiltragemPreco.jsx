import React, { useContext } from 'react';
import ContextWine from '../Context/ContextWine';

function FiltragemPreco() {
  const { setFiltroPreco } = useContext(ContextWine);
  const handleChange = ({ target }) => {
    setFiltroPreco(target.value);
  };

  return (
    <fieldset onChange={(e) => handleChange(e)}>
      <legend>Opção de filtro por preço:</legend>
      <input type="radio" value="0-40" name="filtro" />
      Até R$ 40
      <input type="radio" value="40-60" name="filtro" />
      R$ 40 Até R$ 60
      <input type="radio" value="60-100" name="filtro" />
      R$ 60 Até R$ 100
      <input type="radio" value="100-200" name="filtro" />
      R$ 100 Até R$ 200
      <input type="radio" value="200-500" name="filtro" />
      R$ 200 Até R$ 500
      <input type="radio" value="500-10000" name="filtro" />
      Acime de R$ 500

    </fieldset>
  );
}

export default FiltragemPreco;

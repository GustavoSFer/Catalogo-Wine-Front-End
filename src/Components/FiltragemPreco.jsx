import React, { useContext } from 'react';
import ContextWine from '../Context/ContextWine';
import '../Css/CardProduct.css';

function FilterByPrice() {
  const { setFiltroPreco } = useContext(ContextWine);
  const handleChange = ({ target }) => {
    setFiltroPreco(target.value);
  };

  return (
    <fieldset className="filterText tamanho m-3" onChange={(e) => handleChange(e)}>
      <legend>Opção de filtro por preço:</legend>

      <div className="form-check">
        <label htmlFor="filter">
          Até R$ 40
          <input className="form-check-input" type="radio" value="0-40" id="filter" name="filtro" />
        </label>
      </div>

      <div className="form-check">
        <label htmlFor="filter">
          R$ 40 Até R$ 60
          <input className="form-check-input" type="radio" value="40-60" id="filter" name="filtro" />
        </label>
      </div>

      <div className="form-check">
        <label htmlFor="filter">
          R$ 60 Até R$ 100
          <input className="form-check-input" type="radio" value="60-100" id="filter" name="filtro" />
        </label>
      </div>

      <div className="form-check">
        <label htmlFor="filter">
          R$ 100 Até R$ 200
          <input className="form-check-input" type="radio" value="100-200" id="filter" name="filtro" />
        </label>
      </div>

      <div className="form-check">
        <label htmlFor="filter">
          R$ 200 Até R$ 500
          <input className="form-check-input" type="radio" value="200-500" id="filter" name="filtro" />
        </label>
      </div>

      <div className="form-check">
        <label htmlFor="filter">
          Acima de R$ 500
          <input className="form-check-input" type="radio" value="500-10000" id="filter" name="filtro" />
        </label>
      </div>
    </fieldset>
  );
}

export default FilterByPrice;

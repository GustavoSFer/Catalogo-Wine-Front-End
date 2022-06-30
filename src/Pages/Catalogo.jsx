import React, { useContext } from 'react';
import CardProduct from '../Components/CardProduct';
import ContextWine from '../Context/ContextWine';

function Catalogo() {
  const { products } = useContext(ContextWine);
  return (
    <div>
      {
        products ? products.map((item) => <CardProduct key={item.id} item={item} />)
          : <h1>Sem produtos</h1>
      }
    </div>
  );
}

export default Catalogo;

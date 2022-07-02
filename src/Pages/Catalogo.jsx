import React, { useContext, useState } from 'react';
import CardProduct from '../Components/CardProduct';
import FiltragemPreco from '../Components/FiltragemPreco';
import ContextWine from '../Context/ContextWine';

function Catalogo() {
  const [cart, setCart] = useState([]);
  const { products } = useContext(ContextWine);

  const addProductToCart = (product) => {
    setCart(JSON.parse(localStorage.getItem('cart')));

    const newCart = cart.filter(({ id }) => id !== product.id);
    setCart([...newCart, product]);
    localStorage.setItem('cart', JSON.stringify([...newCart, product]));
  };

  return (
    <div>
      <FiltragemPreco />
      {
        products.length !== 0 ? products.map((item) => (
          <CardProduct
            key={item.id}
            item={item}
            addProductToCart={addProductToCart}
          />
        ))
          : <h1>Sem produtos</h1>
      }
    </div>
  );
}

export default Catalogo;

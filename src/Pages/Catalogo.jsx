import React, { useContext, useState } from 'react';
import CardProduct from '../Components/CardProduct';
import ContextWine from '../Context/ContextWine';

function Catalogo() {
  const [cart, setCart] = useState([]);
  const { products } = useContext(ContextWine);

  const addProductToCart = (product) => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    console.log(cart);
    const newCart = cart.filter(({ id }) => id !== product.id);
    setCart([...newCart, product]);
    localStorage.setItem('cart', JSON.stringify([...newCart, product]));
  };

  return (
    <div>
      {
        products ? products.map((item) => (
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

import React, { useContext, useState } from 'react';
import CardProduct from '../Components/CardProduct';
import FiltragemPreco from '../Components/FiltragemPreco';
import ContextWine from '../Context/ContextWine';
import ButtonOnClick from '../Components/ButtonOnClick';

function Catalogo() {
  const [cart, setCart] = useState([]);
  const { products, page, setPage } = useContext(ContextWine);

  const addProductToCart = (product) => {
    setCart(JSON.parse(localStorage.getItem('cart')));

    const newCart = cart.filter(({ id }) => id !== product.id);
    setCart([...newCart, product]);
    localStorage.setItem('cart', JSON.stringify([...newCart, product]));
  };

  const handleCliciPreviousPage = () => {
    setPage(Number(page) - 1);
  };

  const handleCliciNextPage = () => {
    setPage(Number(page) + 1);
  };

  return (
    <div>
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
            : <h1>Não existe produtos</h1>
        }
      </div>
      <div>
        <ButtonOnClick disabled={page <= 1} onClick={handleCliciPreviousPage}>
          Pagina Anterior
        </ButtonOnClick>

        <ButtonOnClick onClick={handleCliciNextPage}>
          Póxima Pagina
        </ButtonOnClick>
      </div>
    </div>
  );
}

export default Catalogo;

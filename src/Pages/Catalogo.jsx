import React, { useContext, useEffect, useState } from 'react';
import CardProduct from '../Components/CardProduct';
import FiltragemPreco from '../Components/FiltragemPreco';
import ContextWine from '../Context/ContextWine';
import ButtonOnClick from '../Components/ButtonOnClick';
import fetchApiWine from '../Services/requatsApi';

function Catalogo() {
  const [cart, setCart] = useState([]);
  const {
    products,
    page,
    setPage,
    setProducts,
  } = useContext(ContextWine);

  const addProductToCart = (product) => {
    // setCart(JSON.parse(localStorage.getItem('cart')));
    // console.log(JSON.parse(localStorage.getItem('cart')));

    const newCart = cart.filter(({ id }) => id !== product.id);
    setCart([...newCart, product]);
    localStorage.setItem('cart', JSON.stringify([...newCart, product]));
  };

  const handleCliciPreviousPage = async () => {
    setPage(Number(page) - 1);
    const data = await fetchApiWine(page);
    setProducts(data.items);
  };

  const handleCliciNextPage = async () => {
    setPage(Number(page) + 1);
    const data = await fetchApiWine(page);
    setProducts(data.items);
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storage);
  }, []);

  useEffect(() => {
  }, [page]);

  return (
    <main>
      <div className="row row-cols-4 center p-2 mt-5">
        <FiltragemPreco />
        {
          products.length !== 0 ? products.map((item) => (
            <CardProduct
              key={item.id}
              item={item}
              id="card-product"
              addProductToCart={addProductToCart}
            />
          ))
            : <h1>Não existe produtos</h1>
        }
      </div>
      <div className="d-flex justify-content-evenly">
        <ButtonOnClick disabled={page <= 1} onClick={handleCliciPreviousPage}>
          Pagina Anterior
        </ButtonOnClick>
        <span>{`Página: ${page}`}</span>
        <ButtonOnClick disabled={false} onClick={handleCliciNextPage}>
          Póxima Pagina
        </ButtonOnClick>
      </div>
    </main>
  );
}

export default Catalogo;

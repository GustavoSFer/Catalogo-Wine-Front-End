import React, { useEffect, useState } from 'react';
import ButtonOnClick from './ButtonOnClick';
import CardPedidos from './CarPedidos';

function Cart() {
  const [removeProduct, setRemoveProduct] = useState(false);
  const carLocalStorage = JSON.parse(localStorage.getItem('cart'));

  const removerItem = (product) => {
    const remove = carLocalStorage.filter(({ id }) => id !== product);
    localStorage.setItem('cart', JSON.stringify([...remove]));
    setRemoveProduct(!removeProduct);
  };

  useEffect(() => {}, [removeProduct]);

  return (
    <div className="d-flex justify-content-around">
      <div>
        { carLocalStorage ? carLocalStorage.map((pedido) => (
          <div key={pedido.id}>
            <CardPedidos item={pedido} />
            <div className="ms-3">
              <ButtonOnClick
                disabled={false}
                onClick={() => removerItem(pedido.id)}
              >
                Remover do carrinho
              </ButtonOnClick>
            </div>
          </div>
        )) : <h1>Sem Pedidos</h1>}
      </div>
    </div>
  );
}

export default Cart;

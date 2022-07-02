import React, { useEffect, useState } from 'react';
import ButtonOnClick from './ButtonOnClick';
import CardPedidos from './CarPedidos';

function Cart() {
  const [removeProduct, setRemoveProduct] = useState(false);
  const pedidos = JSON.parse(localStorage.getItem('cart'));

  const removerItem = (product) => {
    const remove = pedidos.filter(({ id }) => id !== product);
    localStorage.setItem('cart', JSON.stringify([...remove]));
    setRemoveProduct(!removeProduct);
  };

  useEffect(() => {}, [removeProduct]);

  return (
    <div>
      <div>
        { pedidos ? pedidos.map((pedido) => (
          <div key={pedido.id}>
            <CardPedidos item={pedido} />
            <ButtonOnClick
              onClick={() => removerItem(pedido.id)}
            >
              Remover do carrinho
            </ButtonOnClick>
          </div>
        )) : <h1>Sem Pedidos</h1>}
      </div>
    </div>
  );
}

export default Cart;

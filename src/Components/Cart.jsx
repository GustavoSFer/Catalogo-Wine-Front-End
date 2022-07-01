import React from 'react';
import CardPedidos from './CarPedidos';

function Cart() {
  const pedidos = JSON.parse(localStorage.getItem('cart'));
  console.log(pedidos);
  return (
    <div>
      Carrinho
      { pedidos ? pedidos.map((pedido) => (
        <CardPedidos key={pedido.id} item={pedido} />
      )) : <h1>Sem Pedidos</h1>}
    </div>
  );
}

export default Cart;

import React from 'react';
import PropTypes from 'prop-types';

function CardPedidos({ item }) {
  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div>
        <p>
          {`R$ ${item.price.toFixed(2)}`}
        </p>
        <p>
          {`${item.discount} OFF`}
        </p>
      </div>
      <p>
        {`SÓCIO WINE R$ ${item.priceMember.toFixed(2)}`}
      </p>
      <p>
        {`NÃO SÓCIO R$ ${item.priceNonMember.toFixed(2)}`}
      </p>
    </div>
  );
}

CardPedidos.propTypes = {
  item: PropTypes.objectOf.isRequired,
};

export default CardPedidos;

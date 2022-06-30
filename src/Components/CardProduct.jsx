import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardProduct({ item }) {
  return (
    <Link to={item.id}>
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
    </Link>
  );
}

CardProduct.propTypes = {
  item: PropTypes.objectOf.isRequired,
};

export default CardProduct;

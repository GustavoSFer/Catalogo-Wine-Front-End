import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonOnClick from './ButtonOnClick';

function CardProduct({ item, addProductToCart }) {
  return (
    <div className="container rounded-3 border border-success m-2">
      <Link to={`detalhes/${item.id}`}>
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
      <div>
        <ButtonOnClick
          disabled={false}
          onClick={() => addProductToCart(item)}
        >
          ADICIONAR
        </ButtonOnClick>
      </div>
    </div>
  );
}

CardProduct.defaultProps = { addProductToCart: () => {} };
CardProduct.propTypes = {
  item: PropTypes.objectOf.isRequired,
  addProductToCart: PropTypes.func,
};

export default CardProduct;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonOnClick from './ButtonOnClick';
import '../Css/CardProduct.css';

function CardProduct({ item, addProductToCart }) {
  return (
    <div className="col rounded-3 border border-success m-3 tamanho shadow bg-body rounded">
      <Link className="text-decoration-none" to={`detalhes/${item.id}`}>
        <img className="img-fluid image" src={item.image} alt={item.name} />
        <h3 className="fw-semibold fs-6">{item.name}</h3>
        <div>
          <p className="fst-italic m-0 text-decoration-line-through">
            {`R$ ${item.price.toFixed(2)}`}
          </p>
          <div>
            <p className="fst-italic m-0 bg-danger text-white">
              {`${item.discount}% OFF`}
            </p>
          </div>
        </div>
        <div>
          <p className="fst-italic m-0">
            SÓCIO WINE R$
            <span className="socioFont fw-bold p-1">{item.priceMember.toFixed(2)}</span>
          </p>
        </div>
        <p className="fst-italic m-0">
          {`NÃO SÓCIO R$ ${item.priceNonMember.toFixed(2)}`}
        </p>
      </Link>
      <div className="">
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

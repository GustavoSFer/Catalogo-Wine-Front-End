import React from 'react';
import PropTypes from 'prop-types';

function CardPedidos({ item }) {
  return (
    <div className="col rounded-3 border border-success m-3 tamanho shadow bg-body rounded center">
      <img src={item.image} alt={item.name} className="img-fluid image" />
      <h3 className="fw-semibold fs-6">{item.name}</h3>
      <div>
        <p className="fst-italic m-0 text-decoration-line-through">
          {`R$ ${item.price.toFixed(2)}`}
        </p>
        <p className="fst-italic m-0 bg-danger text-white">
          {`${item.discount} OFF`}
        </p>
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
    </div>
  );
}

CardPedidos.propTypes = {
  item: PropTypes.objectOf.isRequired,
};

export default CardPedidos;

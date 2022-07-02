import React from 'react';
// import PropTypes from 'prop-types';
// import ButtonOnClick from '../Components/ButtonOnClick';
import Nav from '../Components/Nav';

function Details() {
  return (
    <div>
      <Nav />
      Pagina de detalhes.
      {/* <h1>{`${item.country} - ${item.region}`}</h1>
      <p>{`${item.volume}`}</p>
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
      <div>
        <p>{`Tipo: ${item.type} - Classificação: ${item.classification}`}</p>
        <p>{`Comentário do Sommelier ${item.sommelierComment}`}</p>
      </div>
      <div>
        <ButtonOnClick
          disabled={false}
          onClick={() => addProductToCart(item)}
        >
          ADICIONAR
        </ButtonOnClick>
      </div> */}
    </div>
  );
}

// Details.defaultProps = { addProductToCart: () => {} };
// Details.propTypes = {
//   item: PropTypes.objectOf.isRequired,
//   addProductToCart: PropTypes.func,
// };

export default Details;

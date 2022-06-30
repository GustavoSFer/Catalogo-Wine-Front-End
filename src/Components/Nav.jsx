import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Cart from './Cart';
import Search from './Search';

function Nav() {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo da empresa Wine o maior clube de vinhos do mundo" />
        </Link>
      </div>
      <div>
        <Link to="/clube">Clube</Link>
        <Link to="/loja">Loja</Link>
        <Link to="/produtores">Produtores</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/eventos">Eventos</Link>
      </div>
      <div>
        <Search />
        <Cart />
      </div>
    </div>
  );
}

export default Nav;
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import Search from './Search';

function Nav() {
  return (
    <header>
      <nav className="d-flex justify-content-around">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo da empresa Wine o maior clube de vinhos do mundo" />
          </Link>
        </div>
        <div className="m-3">
          <Link className="m-3 text-decoration-none" to="/clube">Clube</Link>
          <Link className="m-3 text-decoration-none" to="/loja">Loja</Link>
          <Link className="m-3 text-decoration-none" to="/produtores">Produtores</Link>
          <Link className="m-3 text-decoration-none" to="/ofertas">Ofertas</Link>
          <Link className="m-3 text-decoration-none" to="/eventos">Eventos</Link>
        </div>
        <div className="d-flex justify-content-between">
          <Search />
          <Link className="m-3 text-decoration-none" to="/pedidos">Carrinho</Link>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

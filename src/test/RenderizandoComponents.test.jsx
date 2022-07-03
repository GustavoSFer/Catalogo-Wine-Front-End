import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import ProvideCatalogo from '../Context/ProvideCatalogo';

describe('Verificando se os elementos aparece na tela', () => {
  it('Verificando se o Elementos da Navegação', async () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );

    const clube = await screen.getByText(/clube/i);
    const loja = await screen.getByText(/loja/i);
    const produtores = await screen.getByText(/produtores/i);
    const ofertas = await screen.getByText(/ofertas/i);
    const eventos = await screen.getByText(/eventos/i);
    const carrinho = await screen.getByText(/carrinho/i);

    expect(clube).toBeInTheDocument();
    expect(loja).toBeInTheDocument();
    expect(produtores).toBeInTheDocument();
    expect(ofertas).toBeInTheDocument();
    expect(eventos).toBeInTheDocument();
    expect(carrinho).toBeInTheDocument();
  });

  it('Verificando se tem o botão "Busca por nome" na tela', async () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );

    const findByName = await screen.findByTestId('btn-busca-por-nome');
    expect(findByName).toBeInTheDocument();
  });
  it('Verificando se tem o logo', () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );
    const logoEmpresa = 'logo.png';
    const image = screen.getByRole('img', {
      name: /Logo da empresa/i,
    });
    expect(image).toHaveAttribute('src', logoEmpresa);
  });
});
describe('Verificando Filtro por valor', () => {
  it('Verificando se o filtro por valor esta na tela', () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );
    const filtro = screen.getByText(/opção de filtro por preço/i);
    expect(filtro).toBeInTheDocument();
  });
  it('Verificando se tem os inputs de filtro por valor', () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );
    const ateQuarenta = screen.getByLabelText('Até R$ 40');
    expect(ateQuarenta).toBeInTheDocument();
  });
});

describe('Verificando os Cards do produtos', () => {
  it('Verificando se os Cards são renderizados', () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );
    const cards = screen.queryAllByRole('img');
    expect(cards).toHaveLength(1);
  });
});

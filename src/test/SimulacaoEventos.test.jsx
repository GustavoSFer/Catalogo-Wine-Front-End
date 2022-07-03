import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ProvideCatalogo from '../Context/ProvideCatalogo';

describe('Verificando o botão de busca', () => {
  it('Verificando se o Elementos da Navegação', async () => {
    render(
      <ProvideCatalogo>
        <App />
      </ProvideCatalogo>,
    );
    const findByName = await screen.findByTestId('btn-busca-por-nome');
    expect(findByName).toBeInTheDocument();

    userEvent.click(findByName);

    const input = await screen.getByTestId('input-busca');
    expect(input).toBeInTheDocument();
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('#NotFound', () => {
  test('Se a página contém um heading h2 com o texto Page requested not found 😭', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe');

    const notfound = screen.getByRole('heading', { name: /Page requested not found/i });
    expect(notfound).toBeInTheDocument();
  });

  test('Se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe');

    const imagePageNotFound = screen.getByAltText(
      /Pikachu crying because the page requested was not found/i,
    );
    expect(imagePageNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});

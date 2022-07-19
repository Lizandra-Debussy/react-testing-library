import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('#About: Se a página contém as informações sobre a Pokédex', () => {
  test('Se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const aboutTitle = screen.getByRole('heading',
      { name: /About Pokédex/i, level: 2 });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<App />);

    const aboutParagraph = screen.getAllByText(/pokémons/i);
    expect(aboutParagraph.length).toBe(2);
  });

  test('Se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);

    const aboutImage = screen.getByAltText(/pokédex/i);
    expect(aboutImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});

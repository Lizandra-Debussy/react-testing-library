import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('Se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Home' });
    expect(aboutLink).toBeInTheDocument();
  });

  test('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(aboutLink).toBeInTheDocument();
  });
});

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
// test('', () => {});

describe('Se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Home' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  });

  test('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);
  });
});

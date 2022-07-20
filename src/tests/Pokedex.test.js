import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('#Pokedex', () => {
  test('Se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);

    const accessHome = screen.getByRole('link', { name: 'Home' });
    userEvent.click(accessHome);

    const aboutPokedex = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(aboutPokedex).toBeInTheDocument();
  });

  test('Se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado',
    () => {
      renderWithRouter(<App />);
      const button = screen.getByRole('button', { name: /próximo pokémon/i });
      expect(button).toBeInTheDocument();

      userEvent.click(button);

      const showPokemon = screen.getByTestId('pokemon-name');
      expect(showPokemon).toBeInTheDocument();
    });

  test('Se é mostrado apenas um pokémon por vez', () => {
    renderWithRouter(<App />);

    const aboutPokemon = screen.getAllByTestId('pokemon-name');
    expect(aboutPokemon.length).toBe(1);
  });

  test('Se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const aboutButton = screen.getByRole('button', { name: /all/i });
    expect(aboutButton).toBeInTheDocument();

    userEvent.click(aboutButton);

    const firstPokemon = screen.getByText(/pikachu/i);
    expect(firstPokemon).toBeInTheDocument();

    const secondFilter = screen.getByRole('button', { name: /fire/i });
    userEvent.click(secondFilter);

    const charmander = screen.getByText(/charmander/i);
    expect(charmander).toBeInTheDocument();

    const buttonType = screen.getAllByTestId('pokemon-type-button');
    expect(buttonType.type).toBe();

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeVisible();
  });

  test('Se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);

    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
  });
});

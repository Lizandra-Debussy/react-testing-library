import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('#Pokemon', () => {
  test('Se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const button = screen.getByRole('button', { name: /all/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    const pokemonName = screen.getByText(/Pikachu/i);
    expect(pokemonName).toBeInTheDocument();

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType.innerHTML).toBe('Electric');

    const pokemonWeight = screen.getByText(/Average weight: 6.0 kg/);
    expect(pokemonWeight).toBeInTheDocument();

    const pokemonImage = screen.getByAltText(/Pikachu sprite/i);
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Se o card contém um link de navegação para exibir detalhes do pokémon', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();
  });

  test('Se ao clicar no link, é redirecionado para a pg de detalhes de pokémon', () => {
    renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();

    userEvent.click(linkMoreDetails);

    const aboutLink = screen.getByRole('heading',
      { name: /pikachu details/i, level: 2 });
    expect(aboutLink).toBeInTheDocument();
  });

  test('Se a URL exibida no navegador muda para /pokemon/<id>', () => {
    // onde <id> é o id do pokémon cujos detalhes se deseja ver
    const { history } = renderWithRouter(<App />);

    const linkMoreDetails = screen.getByRole('link', { name: /more details/i });
    expect(linkMoreDetails).toBeInTheDocument();

    userEvent.click(linkMoreDetails);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('Se existe um ícone de estrela nos pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');

    const checked = screen.getByRole('checkbox',
      { name: /Pokémon favoritado?/i });
    expect(checked).toBeInTheDocument();

    userEvent.click(checked);
    const starIcon = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(starIcon).toHaveAttribute('src', '/star-icon.svg');
  });
});

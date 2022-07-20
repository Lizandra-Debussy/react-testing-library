import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';
// test('', () => {});
describe('As informações detalhadas do pokémon selecionado são mostradas na tela', () => {
  test('A seção de detalhes deve conter um heading h2 com o texto Summary', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');

    const titlePikachu = screen.getByRole('heading', { name: /Pikachu Details/i });
    expect(titlePikachu).toBeInTheDocument();

    const sumaryTitle = screen.getByRole('heading',
      { name: /summary/i, level: 2 });
    expect(sumaryTitle).toBeInTheDocument();
  });

  test('Renderiza um parágrafo com o resumo do pokémon específico', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/151');

    const detailsSumary = screen.getByText(/pure of heart/i);
    expect(detailsSumary).toBeInTheDocument();
  });
});

describe('Renderiza na página mapas contendo as localizações do pokémon', () => {
  test('Deverá existir um heading h2 com o texto Game Locations of <name>', () => {
  // onde <name> é o nome do pokémon exibido
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/25');
    const detailsSection = screen.getByRole('heading',
      { name: /Game Locations of Pikachu/i, level: 2 });
    expect(detailsSection).toBeInTheDocument();
  });

  test('Exibe o nome da localização e uma imagem do mapa em cada localização', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/23');
    const locationName = screen.getByText(/Goldenrod Game Corner/i);
    expect(locationName).toBeInTheDocument();

    const mapImage = screen.getByAltText(/Ekans location/i);
    expect(mapImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/e/ec/Johto_Goldenrod_City_Map.png');
  });
});

describe('Se o usuário pode favoritar um pokémon através da página de detalhes', () => {
  test('A página deve exibir um checkbox que permite favoritar o pokémon', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/pokemons/151');
    const checkbox = screen.getByRole('checkbox',
      { name: /Pokémon favoritado?/i });
    expect(checkbox).toBeInTheDocument();

    userEvent.click(checkbox);
    const checked = screen.getByAltText(/Mew is marked as favorite/i);
    expect(checked).toHaveAttribute('src', '/star-icon.svg');
  });
});

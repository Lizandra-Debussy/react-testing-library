import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/renderWithRouter';

describe('#Favorite Pokémons', () => {
  test('Exiba na tela a msg No favorite pokemon found caso não tenha pokémons favoritos',
    () => {
      renderWithRouter(<App />);
      const aboutLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(aboutLink);

      const aboutText = screen.getByText(/No favorite pokemon found/i);
      expect(aboutText).toBeInTheDocument();
    });
});

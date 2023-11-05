import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';


test('renders learn react link', () => {
  render(<Home/>);
  const element = screen.getByText(/This is some text within a card body/i);
  expect(element).toBeInTheDocument();
});

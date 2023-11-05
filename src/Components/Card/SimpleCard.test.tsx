import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleCard from './SimpleCard';


test('renders learn react link', () => {
  render(<SimpleCard/>);
  const element = screen.getByText(/This is some text within a card body/i);
  expect(element).toBeInTheDocument();
});

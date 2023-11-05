import React from 'react';
import { render, screen } from '@testing-library/react';
import SimpleTable from './SimpleTable';


test('renders learn react link', () => {
  render(<SimpleTable/>);
  const element = screen.getByText(/This is a table/i);
  expect(element).toBeInTheDocument();
});

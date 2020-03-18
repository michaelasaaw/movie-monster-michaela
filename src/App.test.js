import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render-title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/movie monster/i);
  expect(linkElement).toBeInTheDocument();
});

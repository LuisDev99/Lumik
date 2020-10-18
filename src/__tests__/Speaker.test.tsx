import React from 'react';
import { render } from '@testing-library/react';
import SpeakerPage from '../pages/Speaker';

test('renders learn react link', () => {
  const { getByText } = render(<SpeakerPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

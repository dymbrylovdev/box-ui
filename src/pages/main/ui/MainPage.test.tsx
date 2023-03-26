import React from 'react';
import { render } from '@testing-library/react';
import MainPage from 'pages/main/ui/MainPage';

describe('Example component', () => {
  test('renders text', () => {
    const { getByText } = render(<MainPage />);
    const textElement = getByText('MAIN');
    expect(textElement).toBeInTheDocument();
  });
});

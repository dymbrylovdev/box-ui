import { render } from '@testing-library/react';
import { ThemeButton } from './ThemeButton';

describe('Widgetes Test Sidebar', () => {
  test('renders text', () => {
    render(<ThemeButton />);
  });
});

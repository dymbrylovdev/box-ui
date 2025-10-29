import { componentRender } from 'shared/lib';
import { ThemeButton } from './ThemeButton';

describe('Widgets Test Sidebar', () => {
  test('renders text', () => {
    componentRender(<ThemeButton />);
  });
});

import { componentRender } from 'shared/lib';
import { ThemeButton } from './ThemeButton';

describe('Widgetes Test Sidebar', () => {
  test('renders text', () => {
    componentRender(<ThemeButton />);
  });
});

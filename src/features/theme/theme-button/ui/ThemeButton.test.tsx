import componentRender from 'shared/lib/halpers/componentRender/componentRender';
import { ThemeButton } from './ThemeButton';

describe('Widgetes Test Sidebar', () => {
  test('renders text', () => {
    componentRender(<ThemeButton />);
  });
});

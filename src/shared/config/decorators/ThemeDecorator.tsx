import { StoryFn } from '@storybook/react';
import { ThemeProvider, Themes } from 'features/Theme';

export const ThemeDecorator = (theme: Themes) => (StoryComponent: StoryFn) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);

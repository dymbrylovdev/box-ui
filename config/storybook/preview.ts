import type { Preview } from '@storybook/react';
import { RouterDecorator, StyleDecorator } from 'shared/config';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'features/theme';

export const decorators = [
  RouterDecorator,
  StyleDecorator,
  ThemeDecorator(Themes.LIGHT),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators,
};

export default preview;

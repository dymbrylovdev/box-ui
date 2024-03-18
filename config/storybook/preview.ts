import type { Preview } from '@storybook/react';
import {
  RouterDecorator, StoreDecorator, StyleDecorator, ThemeDecorator,
} from '../../src/shared/config';
import { Themes } from '../../src/features/Theme';

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
  // @ts-ignore
  decorators,
};

export default preview;

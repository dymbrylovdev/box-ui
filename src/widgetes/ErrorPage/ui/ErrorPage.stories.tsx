import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config';
import { Themes } from 'features/Theme';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'Widgetes/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const light: Story = {
};

export const dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Themes.DARK),
  ],
};

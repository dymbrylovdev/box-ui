import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'features/theme';
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

export const ErrorPageLight: Story = {
  args: {
  },
};

export const ErrorPageDark: Story = {
  args: {
  },
  decorators: [
    ThemeDecorator(Themes.DARK),
  ],
};

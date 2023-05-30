import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'features/theme';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Widgetes/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  args: {

  },
};

export const Dark: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Themes.DARK),
  ],
};

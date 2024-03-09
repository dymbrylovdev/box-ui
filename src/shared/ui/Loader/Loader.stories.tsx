import type { Meta, StoryObj } from '@storybook/react';
import { ThemeLoader, Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Primary: Story = {
  args: {
    theme: ThemeLoader.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    theme: ThemeLoader.SECONDARY,
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click',
  },
};

export const Secondary: Story = {
  args: {
  },
};

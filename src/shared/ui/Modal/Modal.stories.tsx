import type { Meta, StoryObj } from '@storybook/react';
import { Themes } from 'features/theme';
import { ThemeDecorator } from 'shared/config';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    isOpen: false,
    children: <div>Lorem ipsum dolor sit ame</div>,
  },
};

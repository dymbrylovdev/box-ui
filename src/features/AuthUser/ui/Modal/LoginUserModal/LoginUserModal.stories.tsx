import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { Themes } from 'features/Theme';
import { StoreDecorator } from 'shared/config';
import { LoginUserModal } from './LoginUserModal';

const meta: Meta<typeof LoginUserModal> = {
  title: 'features/LoginUserModal',
  component: LoginUserModal,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof LoginUserModal>;

export const PrimaryLight: Story = {
  args: {
    children: 'PRIMARY',
    isOpen: true,
  },
  decorators: [
    ThemeDecorator(Themes.LIGHT),
    StoreDecorator({
      loginForm: { username: '123', password: 'asd' },
    }),
  ],
};

export const PrimaryDark: Story = {
  args: {
    children: 'PRIMARY',
    isOpen: true,
  },
  decorators: [
    ThemeDecorator(Themes.DARK),
    StoreDecorator({
      loginForm: {
        username: 'e',
        password: 'e111',
        error: 'ewewewe',
      },
    }),
  ],
};

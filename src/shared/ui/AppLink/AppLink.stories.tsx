import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'features/theme';
import { RouterDecorator } from 'shared/config';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof AppLink>;

export const SecondaryDark: Story = {
  args: {
    children: 'SECONDARY',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    ThemeDecorator(Themes.DARK),
  ],
};

//
// export const SecondaryLight: Story = {
//   args: {
//     children: 'SECONDARY',
//     theme: AppLinkTheme.SECONDARY,
//   },
//   decorators: [
//     ThemeDecorator(Themes.LIGHT),
//   ],
// };
//
// export const PrimaryDark: Story = {
//   args: {
//     children: 'PRIMARY',
//     theme: AppLinkTheme.PRIMARY,
//   },
//   decorators: [
//     ThemeDecorator(Themes.DARK),
//   ],
// };
//
// export const PrimaryLight: Story = {
//   args: {
//     children: 'PRIMARY',
//     theme: AppLinkTheme.PRIMARY,
//   },
//   decorators: [
//     ThemeDecorator(Themes.LIGHT),
//   ],
// };

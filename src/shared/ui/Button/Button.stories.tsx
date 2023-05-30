import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'features/theme';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryL: Story = {
  args: {
    children: 'Click',
    size: ButtonSize.L,
  },
};

export const PrimaryXL: Story = {
  args: {
    children: 'Click',
    size: ButtonSize.XL,
  },
};

export const Clear: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Background: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [
    ThemeDecorator(Themes.DARK),
  ],
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};
export const Disabled: Story = {
  args: {
    children: 'Click',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    disabled: true,
  },
};

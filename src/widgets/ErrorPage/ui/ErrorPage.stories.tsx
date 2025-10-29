import type { Meta, StoryObj } from '@storybook/react-vite';
import { Themes } from 'features/Theme';
import { ThemeDecorator } from 'shared/config';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};

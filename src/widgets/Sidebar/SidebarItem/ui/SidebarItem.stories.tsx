import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeDecorator } from 'shared/config';
import { Themes } from 'features/Theme';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
  title: 'Widgets/SidebarItem',
  component: SidebarItem,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};

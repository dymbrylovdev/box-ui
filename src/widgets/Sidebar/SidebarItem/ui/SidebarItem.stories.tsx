import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeDecorator } from 'shared/config';
import { Themes } from 'features/Theme';
import { SidebarItems } from 'widgets/Sidebar/model/items';
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
  args: {
    item: SidebarItems[0],
  },
};

export const Dark: Story = {
  args: {
    item: SidebarItems[0],
  },
  decorators: [ThemeDecorator(Themes.DARK)],
};

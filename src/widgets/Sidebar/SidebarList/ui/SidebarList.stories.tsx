import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeDecorator } from 'shared/config';
import { Themes } from 'features/Theme';
import { SidebarList } from './SidebarList';

const meta: Meta<typeof SidebarList> = {
  title: 'Widgets/Sidebar',
  component: SidebarList,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SidebarList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Themes.DARK)],
};

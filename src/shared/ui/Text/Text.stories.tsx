import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
  },
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitpudiandae. Delectus dignissimos, molestiae! Atque cum debitis delectus deleniti eius esse magnam minus mollitia ullam voluptates.',
    theme: TextTheme.PRIMARY,
  },
};
export const Error: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitpudiandae. Delectus dignissimos, molestiae! Atque cum debitis delectus deleniti eius esse magnam minus mollitia ullam voluptates.',
    theme: TextTheme.ERROR,
  },
};

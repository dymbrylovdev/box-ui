import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins ?? []), tsconfigPaths(), svgr({
        // Configure SVGR options
        svgrOptions: {
          exportType: 'named',
          ref: true,
          svgo: false,
        },
        include: '**/*.svg',
      })],
    };
  },
};
export default config;

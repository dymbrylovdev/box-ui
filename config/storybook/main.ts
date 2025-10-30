import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  async viteFinal(config) {
    // Merge with the existing define configuration to include global constants
    return {
      ...config,
      define: {
        // Add the same global constants as in vite.config.ts
        __IS_DEV__: JSON.stringify(false), // For Storybook builds, set to false
        __API__: JSON.stringify(''),
        ...config.define, // Preserve any existing define values
      },
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

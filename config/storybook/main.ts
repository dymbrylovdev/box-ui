import type { StorybookConfig } from '@storybook/react-webpack5';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import custom from './webpack.config';

const path = require('path');

const config: StorybookConfig = {

  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  webpackFinal: async (config) => {
    config!.resolve!.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ];
    config!.resolve!.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};
export default config;

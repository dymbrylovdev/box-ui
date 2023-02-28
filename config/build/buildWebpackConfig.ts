import webpack from 'webpack';
import { BuildOptions } from './types/confilg';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolves } from './buildResolves';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions) : webpack.Configuration => {
  const { entry, build } = options.paths;

  return {
    mode: options.mode,
    entry,
    output: {
      filename: '[name].[contenthash].js',
      path: build,
      clean: true,
    },
    devtool: 'inline-source-map',
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(options),
    optimization: {
      runtimeChunk: 'single',
    },
    devServer: buildDevServer(options),
  };
};

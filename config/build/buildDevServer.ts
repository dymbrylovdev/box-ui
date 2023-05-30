import { Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { BuildOptions } from './types/confilg';

export const buildDevServer = (options: BuildOptions): ConfigurationDevServer => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true
});

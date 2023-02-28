import webpack from 'webpack';
import { BuildOptions } from './types/confilg';

export const buildResolves = (options: BuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  alias: {},
});

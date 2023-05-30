import webpack from 'webpack';
import { BuildOptions } from './types/confilg';

export const buildResolves = (options: BuildOptions): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js', ".css", ".scss"],
  preferAbsolute: true,
  modules: [options.paths.src, 'node_modules'],
  alias: {},
});

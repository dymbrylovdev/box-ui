import path from 'path';
import webpack from 'webpack';
import { BuildPath } from '../build/types/confilg';
import { buildStyleLoaders } from '../build/buildLoaders/buildStyleLoaders';

export default async ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPath = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');
  config.module.rules.push(buildStyleLoaders(true));

  return config;
};

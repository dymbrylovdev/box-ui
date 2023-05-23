import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
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
  config!.resolve!.extensions!.push('.ts', '.tsx', '.scss');

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  // add SVGR instead
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module.rules.push(buildStyleLoaders(true));

  return config;
};

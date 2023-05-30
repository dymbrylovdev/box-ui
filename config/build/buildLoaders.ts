import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/confilg';
import {buildStyleLoaders} from "./buildLoaders/buildStyleLoaders";
export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const styleLoader = buildStyleLoaders(isDev);

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-Loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-Loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typeScriptLoader,
    styleLoader,
  ];
};

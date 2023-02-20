import webpack from "webpack";
import {BuildOptions} from "./types/confilg";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
            localIdentName: !isDev ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          }
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  const svgLoader = {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
  }

  const fileLoader =  {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
  }

  return [
    typeScriptLoader,
    styleLoader,
    svgLoader,
    fileLoader
  ];
}

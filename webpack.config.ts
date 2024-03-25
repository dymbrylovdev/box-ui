import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPath, EnvOptions } from './config/build/types/confilg';

const paths: BuildPath = {
  build: path.resolve(__dirname, 'build'),
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
};

const config = (env: EnvOptions) => {
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8001';
  const isDev = mode === 'development';

  return buildWebpackConfig({
    paths,
    mode,
    isDev,
    port: PORT,
    apiUrl,
  });
};

export default (env: EnvOptions) => config(env);

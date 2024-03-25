export type Mode = 'production' | 'development';

export type BuildPath = {
  entry: string,
  build: string,
  html: string,
  src: string,
};

export type BuildOptions = {
  mode: Mode,
  paths: BuildPath,
  port: number,
  isDev: boolean,
  apiUrl: string,
};

export type EnvOptions = {
  mode: Mode,
  port: number,
  apiUrl: string,
};

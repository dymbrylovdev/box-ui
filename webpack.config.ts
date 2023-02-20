import path from "path";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildPath, EnvOptions} from "./config/build/types/confilg";

const paths: BuildPath = {
  build: path.resolve(__dirname, "build"),
  entry: path.resolve(__dirname, "src", "index.tsx"),
  html: path.resolve(__dirname, "public", "index.html"),
  src: path.resolve(__dirname, "src")
}

const PORT = 3000;

const config = (env: EnvOptions) => {
  const isDevEnv = env.mode === "development";

  return buildWebpackConfig({
    paths,
    mode: env.mode || "development",
    port: env.port || PORT,
    isDev: isDevEnv
  })
}

export default (env: EnvOptions) => config(env);

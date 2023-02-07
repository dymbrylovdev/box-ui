import webpack from "webpack";

export const buildResolves = (): webpack.ResolveOptions => {
  return  {
    extensions: ['.tsx', '.ts', '.js'],
  }
}

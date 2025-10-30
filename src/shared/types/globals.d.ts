declare module '*.module.css';
declare module '*.module.scss';
// if you use svg

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React from 'react';

  export const SVG: React.FC<React.SVGProps<SVGSVGElement>>;

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module '*.json' {
  const value: any;
  export default value;
}
declare const __IS_DEV__: boolean;
declare const __API__: string;

// Vite environment variables
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

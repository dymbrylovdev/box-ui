declare module '*.module.css';
declare module '*.module.scss';

// if you use svg
declare module '*.svg' {
  import React from 'react';

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;

declare module '*.json' {
  const value: any;
  export default value;
}

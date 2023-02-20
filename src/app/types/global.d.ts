// if you use css
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// if you use scss
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// if you use svg
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__ : boolean;


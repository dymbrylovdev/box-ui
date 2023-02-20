import {lazy} from "react";

export const CartPageAsync = lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout(() => resolve(import('./CartPage')), 1111)
}));

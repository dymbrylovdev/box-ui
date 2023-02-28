import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { CartPage } from 'pages/cart';

export enum AppRouters {
  MAIN = 'main',
  CART = 'cart',
}

export const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.CART]: '/cart',
};

export const RouterConfig: Record<AppRouters, RouteProps> = {
  [AppRouters.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppRouters.CART]: {
    path: RouterPath.cart,
    element: <CartPage />,
  },
};

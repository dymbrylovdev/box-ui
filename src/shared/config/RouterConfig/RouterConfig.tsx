import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { CartPage } from 'pages/cart';
import { NotFoundPage } from 'pages/not-found';

export enum AppRouters {
  MAIN = 'main',
  CART = 'cart',
  NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.CART]: '/cart',
  [AppRouters.NOT_FOUND]: '/*',
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
  [AppRouters.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};

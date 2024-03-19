import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/main';
import { CartPage } from 'pages/cart';
import { NotFoundPage } from 'pages/not-found';
import { ProfilePage } from 'pages/profile';

export enum AppRouters {
  MAIN = 'main',
  CART = 'cart',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppRouters, string> = {
  [AppRouters.MAIN]: '/',
  [AppRouters.CART]: '/cart',
  [AppRouters.PROFILE]: '/profile',
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
  [AppRouters.PROFILE]: {
    path: RouterPath.profile,
    element: <ProfilePage />,
  },
  [AppRouters.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};

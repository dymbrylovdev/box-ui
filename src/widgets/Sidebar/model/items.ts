import { RouterPath } from 'shared/config/RouterConfig/RouterConfig';
import { ClarityListSVG, HomeSVG } from 'shared/assets';
import { FC, SVGProps } from 'react';

export interface ISidebarItem {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export const SidebarItems: ISidebarItem[] = [
  {
    path: RouterPath.main,
    text: 'Главная',
    Icon: HomeSVG,
  },
  {
    path: RouterPath.cart,
    text: 'Карзина',
    Icon: ClarityListSVG,
  },
  {
    path: RouterPath.profile,
    text: 'Профиль',
    Icon: ClarityListSVG,
  },
];

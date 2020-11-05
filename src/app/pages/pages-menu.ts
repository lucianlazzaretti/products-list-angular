import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Produtos',
    icon: 'color-palette-outline',
    children: [
      {
        title: 'Listagem de Produtos',
        link: '/pages/products/products-list',
      }
    ],
  },
  {
    title: 'Clientes',
    icon: 'color-palette-outline',
    children: [
      {
        title: 'Lista de Clientes',
        link: '/pages/customers/customers-list',
      }
    ],
  },
];

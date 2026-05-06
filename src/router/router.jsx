import { createBrowserRouter, Navigate } from 'react-router';

import { Cafe } from '../app/cafe';
import { Cafes } from '../app/cafes';
import { Login } from '../app/login';
import { CafeHome } from '../features/cafe/pages/cafe-home/cafe-home';
import { Dashboard } from '../app/dashboard';
import { Accesorios } from '../app/accesorios';
import { AuthLayout } from '../common/layouts/auth-layout';
import { CafeLayout } from '../common/layouts/cafe-layout';
import { Cafeterias } from '../app/cafeterias';
import { AdminLayout } from '../common/layouts/admin-layout';
import { Merchandising } from '../app/merchandising';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: CafeLayout,
    children: [
      {
        index: true,
        Component: CafeHome,
      },
      {
        path: '/shop/nuestro-cafe',
        Component: Cafes,
      },
      {
        path: '/shop/nuestro-cafe/:idCafe',
        Component: Cafe,
      },
      {
        path: '/shop/merchandising',
        Component: Merchandising,
      },
      {
        path: '/shop/accesorios',
        Component: Accesorios,
      },
      {
        path: 'nuestras-cafeterias',
        Component: Cafeterias,
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);

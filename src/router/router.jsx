import { createBrowserRouter, Navigate } from 'react-router';

import { Cafe } from '../app/cafe';
import { Cafes } from '../app/cafes';
import { Login } from '../app/login';
import { CafeHome } from '../features/cafe/pages/cafe-home/cafe-home';
import { Dashboard } from '../app/dashboard';
import { Accesorio } from '../app/accesorio';
import { Accesorios } from '../app/accesorios';
import { AuthLayout } from '../common/layouts/auth-layout';
import { CafeLayout } from '../common/layouts/cafe-layout';
import { Cafeterias } from '../app/cafeterias';
import { AdminLayout } from '../common/layouts/admin-layout';
import { Merchandising } from '../app/merchandising';
import { Merchandisings } from '../app/merchandisings';
import {
  AdminRoute,
  AuthenticatedRoute,
  NotAuthenticatedRoute,
} from '../common/components/protected-routes/protected-routes';
import { Compra } from '../app/compra';
import { Register } from '../app/register';

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
        Component: Merchandisings,
      },
      {
        path: '/shop/merchandising/:idMerchandising',
        Component: Merchandising,
      },
      {
        path: '/shop/accesorios',
        Component: Accesorios,
      },
      {
        path: '/shop/accesorios/:idAccesorio',
        Component: Accesorio,
      },
      {
        path: 'nuestras-cafeterias',
        Component: Cafeterias,
      },
      {
        path: 'carrito',
        element: (
          <AuthenticatedRoute>
            <Compra />
          </AuthenticatedRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: (
      <NotAuthenticatedRoute>
        <AuthLayout />
      </NotAuthenticatedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  {
    path: '/admin',
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

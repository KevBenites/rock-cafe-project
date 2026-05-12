import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { loginService } from '../services/auth-service';
import { checkAuthService } from '../services/check-auth-service';
import { registerService } from '../services/register-service';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      authStatus: 'checking',

      isAdmin: () => {
        const roles = get().user?.roles || [];
        return roles.includes('admin');
      },

      login: async ({ email, password }) => {
        try {
          const data = await loginService({ email, password });

          set({
            user: data.user,
            token: data.token,
            authStatus: 'authenticated',
          });

          return true;
        } catch {
          set({
            user: null,
            token: null,
            authStatus: 'not-authenticated',
          });

          return false;
        }
      },

      register: async ({ email, password, nombre, apellido }) => {
        try {
          await registerService({
            email,
            password,
            nombre,
            apellido,
          });

          return {
            ok: true,
          };
        } catch (error) {
          return {
            ok: false,
            message:
              error?.response?.data?.detail || 'Error al registrar usuario',
          };
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          authStatus: 'not-authenticated',
        });
      },

      checkAuthStatus: async () => {
        try {
          const { user, token } = await checkAuthService();

          set({
            user,
            token,
            authStatus: 'authenticated',
          });

          return true;
        } catch {
          set({
            user: null,
            token: null,
            authStatus: 'not-authenticated',
          });

          return false;
        }
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);

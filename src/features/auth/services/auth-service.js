import { apiCafe } from '../../../common/api/api-cafe';

export const loginService = async ({ email, password }) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const { data } = await apiCafe.post(`${API_URL}/auth/login`, {
    email,
    password,
  });

  return data;
};

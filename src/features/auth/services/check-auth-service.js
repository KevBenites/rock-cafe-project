import { apiCafe } from '../../../common/api/api-cafe';

export const checkAuthService = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');

  try {
    const { data } = await apiCafe.get('/auth/check-auth');
    console.log(data);

    localStorage.setItem('token', data.token);

    console.log({ data });

    return data;
  } catch (error) {
    console.log(error);
    localStorage.removeItem('token');
    throw new Error('Token expired or not valid');
  }
};

import { apiCafe } from '../../../common/api/api-cafe';

export const registerService = async ({
  email,
  password,
  nombre,
  apellido,
}) => {
  const { data } = await apiCafe.post('/auth/register', {
    email,
    password,
    nombre,
    apellido,
  });

  return data;
};

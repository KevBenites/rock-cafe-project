import { apiCafe } from '../../../../../common/api/api-cafe';

export const getMerchandisingById = async (id) => {
  const { data } = await apiCafe.get(`/products/merchandising/${id}`);

  return data;
};

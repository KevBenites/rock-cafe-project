import { useQuery } from '@tanstack/react-query';
import { getAccesorioById } from '../services/get-accesorio-by-id';

export const useAccesorioById = (id) => {
  return useQuery({
    queryKey: ['accesorio', id],
    queryFn: () => getAccesorioById(id),
    staleTime: 1000 * 60 * 5,
  });
};

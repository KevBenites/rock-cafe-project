import { useQuery } from '@tanstack/react-query';
import { getCafeById } from '../services/get-cafe-by-id';

export const useCafeById = (id) => {
  return useQuery({
    queryKey: ['cafe', id],
    queryFn: () => getCafeById(id),
    staleTime: 1000 * 60 * 5,
  });
};

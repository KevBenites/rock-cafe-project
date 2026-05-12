import { useQuery } from '@tanstack/react-query';
import { getMerchandisingById } from '../services/get-merchandising-by-id';

export const useMerchandisingById = (id) => {
  return useQuery({
    queryKey: ['merchandising', id],
    queryFn: () => getMerchandisingById(id),
    staleTime: 1000 * 60 * 5,
  });
};

import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

function useTour(tourId) {
  return useQuery({
    queryKey: ['tour', tourId],
    queryFn: async () => {
      const response = await api.get(`/tours/${tourId}`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export default useTour;

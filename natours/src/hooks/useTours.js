import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

function useTours() {
  return useQuery({
    queryKey: ['tours'],
    queryFn: async () => {
      const response = await api.get('/tours');
      return response.data;
    },
  });
}

export default useTours;

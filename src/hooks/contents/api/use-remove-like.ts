import { useMutation, useQueryClient } from '@tanstack/react-query';

import { removeLike } from '@/libs/likes-service';
import { setSentryLogging } from '@/utils/error-logging';

export const useRemoveLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (contentId: number) => removeLike(contentId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['remove-like'] });
    },
    onError: (error: Error) => {
      setSentryLogging(error);
      // console.error('Error Remove Like : ', error);
    },
  });
};

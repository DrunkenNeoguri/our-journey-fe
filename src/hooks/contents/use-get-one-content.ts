import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import type { Content } from '@/types/contents';
import { API_PATHS } from '@/constants/api';

import { preAxiosInstance } from '@/libs/pre-axios';

export default function useGetOneContent() {
  const { asPath } = useRouter();
  const contentsId = asPath.split('/').filter(Boolean).pop();

  const { data: content } = useQuery({
    queryKey: ['api/get-one-content'],
    queryFn: async () => {
      const fetchData = (await preAxiosInstance.get(API_PATHS.CONTENTS.GET_ONE(Number(contentsId)))).data;
      return fetchData as Content;
    },
  });

  return { content };
}

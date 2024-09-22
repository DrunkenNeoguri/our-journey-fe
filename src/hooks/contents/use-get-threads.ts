import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import type { Threads } from '@/types/threads';
import { API_PATHS } from '@/constants/api';

import { preAxiosInstance } from '@/libs/pre-axios';

export default function useGetThreads() {
  const { asPath } = useRouter();
  const threadsId = asPath.split('/').filter(Boolean).pop();

  const {
    data: threads,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['api/get-threads', threadsId],
    queryFn: async ({ pageParam }: { pageParam?: number }) => {
      const list = (await preAxiosInstance.get(API_PATHS.CONTENTS.THREADS.GET(Number(threadsId)))).data;
      return list as Promise<Threads>;
    },
    getNextPageParam: (lastPage) => undefined,
    // if (lastPage.list.last) return undefined;
    // const nextPage = lastPage.list.pageable.pageNumber + 1;
    // return nextPage;
    initialPageParam: 0,
  });

  return { threads, fetchNextPage, hasNextPage };
}

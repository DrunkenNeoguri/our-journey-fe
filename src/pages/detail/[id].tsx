import { useRef } from 'react';

import useGetOneContent from '@/hooks/contents/use-get-one-content';
import useGetThreads from '@/hooks/contents/use-get-threads';

import CreateThread from './components/create-thread';
import ThreadBanner from './components/thread-banner';
import ThreadsFeed from './components/threads-feed';

import s from './style.module.scss';

export default function Detail() {
  const { content } = useGetOneContent();
  const { threads } = useGetThreads();
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <section className={s.searchWrapper}>
      <ThreadBanner content={content} />
      <div className={s.threadsWrapper}>
        {threads?.pages.map((thread) => <ThreadsFeed key={thread.list.pageable.pageNumber} data={thread.list.content} />)}
        <div className={s.refArea} ref={divRef} />
      </div>
      <CreateThread contentId={content?.contentId} />
    </section>
  );
}

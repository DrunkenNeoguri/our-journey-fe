import type { Thread } from '@/types/threads';

import ThreadCard from '../thread-card';

import s from './style.module.scss';

export default function ThreadsFeed({ data }: { data?: Thread[] }) {
  return <section className={s.feedWrapper}>{data?.map((post) => <ThreadCard key={post.threadId} data={post} />)}</section>;
}

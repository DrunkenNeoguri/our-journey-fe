import Link from 'next/link';

import { ROUTES } from '@/constants/router';

import s from './style.module.scss';

import { AddIcon } from '@/assets/icons';

interface Props {
  contentId?: number;
}

export default function CreateThread(props: Props) {
  const { contentId } = props;

  if (!contentId) {
    return <div />;
  }

  return (
    <Link href={`${ROUTES.detail}/${contentId}/upsert`} className={s.createThreadAnchor}>
      <AddIcon />
      <span className={s.anchorTitle}>여행 타래를 작성해볼까요?</span>
      <span className={s.anchorDescription}>이야기를 공유해보세요!</span>
    </Link>
  );
}

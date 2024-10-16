import { useEffect, useState } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/constants/router';

import s from './style.module.scss';

import { WriteIcon } from '@/assets/icons';

export default function CreateBox() {
  const [loginState, setLoginState] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('accessToken') != null) {
      setLoginState(true);
    }
  }, []);

  return (
    <Link href={loginState ? ROUTES.content.create() : ROUTES.needLogin} className={s.createBoxContainer}>
      <WriteIcon />
      <div className={s.createBoxDescription}>
        <span className={s.createBoxTitle}>여행 타래를 작성해볼까요?</span>
        <span className={s.createBoxContext}>이야기를 공유해보세요!</span>
      </div>
    </Link>
  );
}

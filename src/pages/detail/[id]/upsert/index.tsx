import type { ReactNode } from 'react';

import Header from '@/components/header';
import DefaultLayout from '@/components/layouts';

import s from './style.module.scss';

// *MEMO: 컴포넌트 잘게 쪼개는 건 조이 님에게 맡길게요!

interface Props {
  mode: 'edit' | 'write';
}

export default function ThreadUpserts(props: Props) {
  const { mode } = props;

  return (
    <>
      <Header title={mode === 'write' ? '새 타래 작성하기' : '타래 수정하기'} />
      <form className={s.newContentsWrapper}>
        <div className={s.newContentsImgBox}>
          <img alt="asd" src="" />
        </div>
        <div className={s.newContentsFormBox}>
          <div className={s.imageButtonBox}>
            <button type="button" className={s.addImageBtn}>
              <span>이미지 교체</span>
            </button>
          </div>
          <textarea className={s.descriptionTextArea} placeholder="여행 내용을 작성해주세요!" />
          <div className={s.hashTagBox}>
            <input className={s.addHashTag} placeholder="#해시태그" maxLength={8} />
          </div>
          <button type="submit" className={s.submitButton}>
            <span>발행하기</span>
          </button>
        </div>
      </form>
    </>
  );
}

ThreadUpserts.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

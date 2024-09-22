import type { KeyboardEvent, ReactNode } from 'react';

import Header from '@/components/header';
import DefaultLayout from '@/components/layouts';

import s from './style.module.scss';

// *MEMO: 컴포넌트 잘게 쪼개는 건 조이 님에게 맡길게요!

export default function NewContents() {
  const handleKeyDownInHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('엔터 입력');
    }
  };

  return (
    <>
      <Header title="새 글 작성하기" />
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
          <input className={s.titleInput} placeholder="여행의 제목을 달아주세요!" />
          <div className={s.hashTagBox}>
            <input className={s.addHashTag} placeholder="#해시태그" maxLength={8} onKeyDown={handleKeyDownInHashTag} />
          </div>
          {/* <div>
            <button type="button">작업자 추가하기</button>
          </div> */}
          <button type="submit" className={s.submitButton}>
            <span>발행하기</span>
          </button>
        </div>
      </form>
    </>
  );
}

NewContents.getLayout = (page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>;

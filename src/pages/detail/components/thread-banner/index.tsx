import { useState } from 'react';

import type { Content } from '@/types/contents';

import { formatDate } from '@/libs/date';

import useGetOneContent from '@/hooks/contents/use-get-one-content';

import s from './style.module.scss';

import { ArrowRoundIcon, DetailOptionIcon, HeartIcon, ShareIcon } from '@/assets/icons';

interface Props {
  content?: Content;
}

export default function ThreadBanner(props: Props) {
  const { content } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOptionMenu = () => setIsOpen(!isOpen);

  if (!content) {
    return <div />;
  }

  return (
    <section className={s.bannerWrapper}>
      <div className={s.imageBox}>
        <img
          src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="next level"
          className={s.postImage}
        />
        {/* <img src={content.postImg} alt="Somebody Help Me" /> */}
        <div className={s.bannerHeader}>
          <button aria-label="뒤로가기" type="button" className={s.bannerHeaderButton}>
            <ArrowRoundIcon />
          </button>
          <button aria-label="옵션" type="button" className={s.bannerHeaderButton} onClick={handleToggleOptionMenu}>
            <DetailOptionIcon />
            {isOpen && (
              <div className={s.optionMenuBox}>
                <button type="button" className={`${s.optionMenuButton} ${s.top}`}>
                  수정하기
                </button>
                <button type="button" className={`${s.optionMenuButton} ${s.bottom}`}>
                  삭제하기
                </button>
              </div>
            )}
          </button>
        </div>

        <span className={s.date}>{`${formatDate(new Date(content.createdAt))} MEMORY`}</span>
        <div className={s.titleArea}>
          <div className={s.titleBox}>
            <h1>{content.title}</h1>
            <span>졸린 무지</span>
          </div>
        </div>
      </div>
      <div className={s.hashTagToolBox}>
        <div className={s.hashtagList}>
          {/* 나중에 Link로 변경 & map쓰기 */}
          <button type="button" className={s.hashtag}>
            #해시태그
          </button>
          <button type="button" className={s.hashtag}>
            #해시태그
          </button>
          <button type="button" className={s.hashtag}>
            #해시태그
          </button>
        </div>
        <div className={s.featBoxArea}>
          <div className={s.featBox}>
            <button type="button" className={s.featBoxButton}>
              <HeartIcon />
            </button>

            <button type="button" className={s.featBoxButton}>
              <ShareIcon />
            </button>
          </div>
          <div className={s.countBox}>
            <span>좋아요 11</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

import type { Thread } from '@/types/threads';

import s from './style.module.scss';

import { ThreadOptionIcon } from '@/assets/icons';

interface Props {
  data: Thread;
}

export default function ThreadCard({ data }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleOptionMenu = () => setIsOpen(!isOpen);

  return (
    <article className={s.threadWrapper}>
      <div className={s.profileArea}>
        <div className={s.profileBox}>
          {/* <img className={s.profileThumbnail} src={data.profileThreadDto.imgUrl} alt={`${data.profileThreadDto.nickName} 님의 사진`} loading="lazy" /> */}
          <img
            className={s.profileThumbnail}
            src="https://cdn-icons-png.flaticon.com/512/9967/9967422.png"
            alt={`${data.profileThreadDto.nickName} 님의 사진`}
            loading="lazy"
          />
          <span className={s.profileName}>{data.profileThreadDto.nickName}</span>
        </div>
        <button type="button" className={s.optionButton} onClick={handleToggleOptionMenu}>
          <ThreadOptionIcon />
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

      <div className={s.thumbnailBox}>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={s.thumbnail}
          loading="lazy"
        />
        {/* <img alt="" src={data.threadImg} className={s.thumbnail} loading="lazy" /> */}
      </div>

      <p className={s.description}>{data.texts}</p>
      <div className={s.hashtagList}>
        {/* 나중에 Link로 변경 */}
        {/* {data.tagNames.map((hashtag) => (
          <button type="button" key={hashtag} className={s.hashtag}>
            `#{hashtag}`
          </button>
        ))} */}
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
    </article>
  );
}

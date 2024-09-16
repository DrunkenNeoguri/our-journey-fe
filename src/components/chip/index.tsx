import React from 'react';

import s from './style.module.scss';

interface Props {
  chipList: string[];
}

const Chip = React.memo((props: Props) => {
  const { chipList } = props;

  const key = chipList.join();

  return (
    <div className={s.chipBox}>
      {chipList.map((chip, index) => (
        <>
          <span key={`${key}${chip}`} className={s.chipText}>
            {`#${chip}`}
          </span>
          {chipList.length - 1 > index && (
            <span key={`${key}${chip}${index}`} className={`${s.chipText} ${s.dot}`}>
              ·
            </span>
          )}
        </>
      ))}
    </div>
  );
});

Chip.displayName = 'Chip';

export default Chip;

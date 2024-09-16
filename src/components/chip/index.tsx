import s from './style.module.scss';

interface Props {
  chipList: string[];
}

export default function Chip(props: Props) {
  const { chipList } = props;

  return (
    <div className={s.chipBox}>
      {chipList.map((chip, index) => (
        <>
          <span key={chip} className={s.chipText}>
            {`#${chip}`}
          </span>
          {chipList.length - 1 > index && <span className={`${s.chipText} ${s.dot}`}>·</span>}
        </>
      ))}
    </div>
  );
}

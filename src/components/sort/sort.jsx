import style from './sort.module.css'
export default function Sort({ trii }) {
  return (
    <div className={style.container}>
      <button
        onClick={() => trii('rating')} className={style.button}   >
        Trier par note
      </button>
      <button
        onClick={() => trii('releaseYear')}
        className={style.button}>
        Trier par année
      </button>
    </div>
  );
}
import style from "./search.module.css"
export default function SearchBar({ search, onSearch }) {
  return (
    <div className={style.container}>
      <input type="text" placeholder="Rechercher un film..." value={search} onChange={(e) => onSearch(e.target.value)} className={style.search} ></input>
   </div>
  );
}

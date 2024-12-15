import style from "./header.module.css"
export default function Header() {
    return (
      <header className={style.header}>
        <div className={style.container}>
          <h1 className={style.titre}>Filmographie</h1>
        </div>
      </header>
    );
  }
import style from "./header.module.css"
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
      <header className={style.header}>
        <div className={style.container}>
          <h1 className={style.titre}>Filmographie</h1>
          
          <NavLink to="/films">
          Liste des Films
          </NavLink>
      
        </div>
      </header>
    );
  }
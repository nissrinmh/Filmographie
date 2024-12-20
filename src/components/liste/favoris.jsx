import React from "react";
import style from "./film.module.css";

export default function FavoritesList({ favorites, toggleFavorite, details }) {
  return (
    <div>
      <h2>Favoris</h2>
      {favorites && favorites.length > 0 ? (
        favorites.map((elt) => (
          <div className={style.container} key={elt.title}>
            <div className={style.card}>
              <div className={style.titre}>
                <h3>{elt.title}</h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(elt);
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  ❤️
                </button>
              </div>
              <p className={style.director}>{elt.director}</p>
              <div className={style.details}>
                <span className={style.genre}>{elt.genre}</span>
                <div className={style.rating}>
                  <span>{elt.rating}</span>
                </div>
              </div>
              <p className={style.director}>{elt.releaseYear}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Aucun film favori.</p>
      )}
    </div>
  );
}

import React, { useState } from "react";
import  './ajouterfilm.module.css'
export default function Ajouterfilm({ onAddFilm }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  // États pour les messages d'erreur
  const [errors, setErrors] = useState({
    title: "",
    director: "",
    releaseYear: "",
    genre: "",
    rating: "",
  });

  const genres = ["Crime", "Drama", "Action", "Comedy", "Fantasy", "Science Fiction", "Historical Drama"];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    let formErrors = { ...errors };

    if (!title) {
      formErrors.title = "Le titre est obligatoire.";
    } else {
      formErrors.title = "";
    }

    if (!director) {
      formErrors.director = "Le réalisateur est obligatoire.";
    } else {
      formErrors.director = "";
    }

    if (!releaseYear || isNaN(releaseYear)) {
      formErrors.releaseYear = "L'année de sortie est obligatoire et doit être un nombre.";
    } else {
      formErrors.releaseYear = "";
    }

    if (!genre) {
      formErrors.genre = "Le genre est obligatoire.";
    } else {
      formErrors.genre = "";
    }

    if (!rating || rating < 0 || rating > 10) {
      formErrors.rating = "La note doit être entre 0 et 10.";
    } else {
      formErrors.rating = "";
    }

    
    if (Object.values(formErrors).some((error) => error !== "")) {
      setErrors(formErrors);
      return;
    }

    
    const newFilm = {
      title,
      director,
      releaseYear: parseInt(releaseYear),
      genre,
      rating: parseFloat(rating),
    };

    onAddFilm(newFilm);

    // Réinitialiser les champs du formulaire après soumission
    setTitle("");
    setDirector("");
    setReleaseYear("");
    setGenre("");
    setRating("");
  };

  const handleReset = () => {
    setTitle("");
    setDirector("");
    setReleaseYear("");
    setGenre("");
    setRating("");
    setErrors({
      title: "",
      director: "",
      releaseYear: "",
      genre: "",
      rating: "",
    });
  };

  return (
    <div>
      <h2>Ajouter un Film</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="director">Réalisateur</label>
          <input
            type="text"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          {errors.director && <p className="error">{errors.director}</p>}
        </div>

        <div>
          <label htmlFor="releaseYear">Année de Sortie</label>
          <input
            type="number"
            id="releaseYear"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          />
          {errors.releaseYear && <p className="error">{errors.releaseYear}</p>}
        </div>

        <div>
          <label htmlFor="genre">Genre</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Choisir un genre</option>
            {genres.map((gen, index) => (
              <option key={index} value={gen}>
                {gen}
              </option>
            ))}
          </select>
          {errors.genre && <p className="error">{errors.genre}</p>}
        </div>

        <div>
          <label htmlFor="rating">Note</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          {errors.rating && <p className="error">{errors.rating}</p>}
        </div>

        <button type="submit">Ajouter le film</button>
        <button type="button" onClick={handleReset} className="resetButton">Réinitialiser</button>
      </form>
    </div>
  );
}

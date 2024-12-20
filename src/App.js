import { useState } from "react";
import './App.css';
import Header from './components/header/header';
import Listfilm from './components/liste/films';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ajouterfilm from './components/liste/ajouterfilm'; // Importation correcte
import FavoritesList from "./components/liste/favoris";

function App() {
  const liste = [
    {
      "title": "Inception",
      "director": "Christopher Nolan",
      "releaseYear": 2010,
      "genre": "Science Fiction",
      "rating": 8.8
    },
    {
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "releaseYear": 1972,
      "genre": "Crime",
      "rating": 9.2
    },
    {
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "releaseYear": 2008,
      "genre": "Action",
      "rating": 9.0
    },
    {
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "releaseYear": 1994,
      "genre": "Crime",
      "rating": 8.9
    },
    {
      "title": "Schindler's List",
      "director": "Steven Spielberg",
      "releaseYear": 1993,
      "genre": "Historical Drama",
      "rating": 9.0
    },
    {
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "releaseYear": 1994,
      "genre": "Drama",
      "rating": 9.3
    },
    {
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "releaseYear": 1994,
      "genre": "Comedy-Drama",
      "rating": 8.8
    },
    {
      "title": "The Matrix",
      "director": "Lana Wachowski, Lilly Wachowski",
      "releaseYear": 1999,
      "genre": "Science Fiction",
      "rating": 8.7
    },
    {
      "title": "Fight Club",
      "director": "David Fincher",
      "releaseYear": 1999,
      "genre": "Drama",
      "rating": 8.8
    },
    {
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "releaseYear": 2003,
      "genre": "Fantasy",
      "rating": 9.0
    }
  ];

  const [films, setFilms] = useState(liste);
  const [showAddFilmForm, setShowAddFilmForm] = useState(false);

  const toggleAddFilmForm = () => {
    setShowAddFilmForm(!showAddFilmForm);
  };

  const handleAddFilm = (newFilm) => {
    setFilms((prevFilms) => [...prevFilms, newFilm]);
    setShowAddFilmForm(false);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/films" element={<Listfilm />} />
          <Route path="/favoris" element={<FavoritesList />} /> {/* Route pour les favoris */}
          <Route path="/ajouterfilm" element={<Ajouterfilm onAddFilm={handleAddFilm} />} /> {/* Utilisation correcte */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

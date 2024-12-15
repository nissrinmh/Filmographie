// import { useState } from "react";
// import style from "./film.module.css"
// import Filmdetails from "./filmdetails";
// import Pagination from "../pagination/pagination";
// import SearchBar from "../search/search";
// import Sort from "../sort/sort";
// export default function Listfilm(){
//     const list=[
//         {
//         "title": "Inception",
//         "director": "Christopher Nolan",
//         "releaseYear": 2010,
//         "genre": "Science Fiction",
//         "rating": 8.8
//         },
//         {
//         "title": "The Godfather",
//         "director": "Francis Ford Coppola",
//         "releaseYear": 1972,
//         "genre": "Crime",
//         "rating": 9.2
//         },
//         {
//         "title": "The Dark Knight",
//         "director": "Christopher Nolan",
//         "releaseYear": 2008,
//         "genre": "Action",
//         "rating": 9.0
//         },
//         {
//         "title": "Pulp Fiction",
//         "director": "Quentin Tarantino",
//         "releaseYear": 1994,
//         "genre": "Crime",
//         "rating": 8.9
//         },
//         {
//         "title": "Schindler's List",
//         "director": "Steven Spielberg",
//         "releaseYear": 1993,
//         "genre": "Historical Drama",
//         "rating": 9.0
//         },
//         {
//         "title": "The Shawshank Redemption",
//         "director": "Frank Darabont",
//         "releaseYear": 1994,
//         "genre": "Drama",
//         "rating": 9.3
//         },
//         {
//         "title": "Forrest Gump",
//         "director": "Robert Zemeckis",
//         "releaseYear": 1994,
//         "genre": "Comedy-Drama",
//         "rating": 8.8
//         },
//         {
//         "title": "The Matrix",
//         "director": "Lana Wachowski, Lilly Wachowski",
//         "releaseYear": 1999,
//         "genre": "Science Fiction",
//         "rating": 8.7
//         },
//         {
//         "title": "Fight Club",
//         "director": "David Fincher",
//         "releaseYear": 1999,
//         "genre": "Drama",
//         "rating": 8.8
//         },
//         {
//         "title": "The Lord of the Rings: The Return of the King",
//         "director": "Peter Jackson",
//         "releaseYear": 2003,
//         "genre": "Fantasy",
//         "rating": 9.0
//         }
//     ]


//     const [actuel, setactuel] = useState(1);
//     const [number,setnumber] = useState(5);

//     const [search, setSearch] = useState("");

    
  
//     const searched = search ? list.filter((elt) =>elt.title.includes(search) )
//     : list; 

//     const [tri, setTri] = useState("");

//     const listtrie = searched.sort((a, b) => {
//         if (tri === 'rating') {
//           return b.rating - a.rating; 
//         }
//         if (tri === 'releaseYear') {
//           return b.releaseYear - a.releaseYear; 
//         }
//         return 0; 
//       });

//     const dernier = actuel * number;
//     const premier = dernier - number;
//     const currentFilms = listtrie.slice(premier, dernier);


//     const paginate = (pageNumber) => setactuel(pageNumber);


//     const totalPages = Math.ceil(listtrie.length / number);

//     const [film,setFilm]=useState(null)
//     const details = (elt) => {
//         setFilm(elt); 
//     };

//     const handleSort = (e) => {
//         setTri(e); 
//     };

//     return (
//         <>
//         <Sort trii={handleSort}/>
//         <SearchBar searchTerm={search} onSearch={setSearch} />
        
//        {currentFilms.map(elt=><div className={style.container}>
//           <div className={style.card}  key={elt.title}>
//             <div className={style.titre}>
//               <h3  >{elt.title}</h3>
//               {/* <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   onToggleFavorite(movie);
//                 }}
//                 className="text-red-500 hover:text-red-600"
//               >
//                 <Heart fill={isFavorite ? "currentColor" : "none"} />
//               </button> */}
//             </div>
//             <p className={style.director}>{elt.director}</p>
//             <div className={style.details}>
//               <span className={style.genre}>
//                 {elt.genre}
//               </span>
//               <div className={style.rating}>
//                 {/* <Star className="text-yellow-400" size={16} /> */}
//                 <span>{elt.rating}</span>
//               </div>
//             </div>
//             <p className={style.director}>{elt.releaseYear}</p>
//             <button value={elt.title}
//             onClick={() => details(elt)}  
//             className={style.but}
//           >
//             Voir les détails
//           </button>
//           </div>
          
//         </div>
//         )}
//         <Pagination actuelle={actuel} total={totalPages} paginate={paginate} />
   
//         {film && <Filmdetails det={film} />} 
     
//        </>
//     );
// } 





import { useState } from "react";
import style from "./film.module.css";
import Filmdetails from "./filmdetails";
import Pagination from "../pagination/pagination";
import SearchBar from "../search/search";
import Sort from "../sort/sort";
import Ajouterfilm from "./ajouterfilm";

export default function Listfilm() {
  const list = [
    {
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Science Fiction",
      rating: 8.8,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      genre: "Crime",
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
      genre: "Action",
      rating: 9.0,
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      releaseYear: 1994,
      genre: "Crime",
      rating: 8.9,
    },
    {
      title: "Schindler's List",
      director: "Steven Spielberg",
      releaseYear: 1993,
      genre: "Historical Drama",
      rating: 9.0,
    },
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
      genre: "Drama",
      rating: 9.3,
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      releaseYear: 1994,
      genre: "Comedy-Drama",
      rating: 8.8,
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      releaseYear: 1999,
      genre: "Science Fiction",
      rating: 8.7,
    },
    {
      title: "Fight Club",
      director: "David Fincher",
      releaseYear: 1999,
      genre: "Drama",
      rating: 8.8,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      director: "Peter Jackson",
      releaseYear: 2003,
      genre: "Fantasy",
      rating: 9.0,
    },
  ];

  const [actuel, setActuel] = useState(1);
  const [number, setNumber] = useState(5);
  const [search, setSearch] = useState("");
  const [tri, setTri] = useState("");
  const [film, setFilm] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false); 
  const [showAddFilmForm, setShowAddFilmForm] = useState(false);
  const [films, setFilms] = useState(list);  

  const toggleAddFilmForm = () => {
    setShowAddFilmForm(!showAddFilmForm); 
  };

  const handleAddFilm = (newFilm) => {
    setFilms((prevFilms) => [...prevFilms, newFilm]); 
    setShowAddFilmForm(false); 
  };

  const searched = search ? films.filter((elt) => elt.title.includes(search)) : films;

  const listTrie = searched.sort((a, b) => {
    if (tri === "rating") {
      return b.rating - a.rating;
    }
    if (tri === "releaseYear") {
      return b.releaseYear - a.releaseYear;
    }
    return 0;
  });

  const dernier = actuel * number;
  const premier = dernier - number;
  const currentFilms = listTrie.slice(premier, dernier);

  const paginate = (pageNumber) => setActuel(pageNumber);
  const totalPages = Math.ceil(listTrie.length / number);

  const details = (elt) => {
    setFilm(elt);
  };

  const handleSort = (e) => {
    setTri(e);
  };

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(movie)) {
        return prevFavorites.filter((fav) => fav !== movie);
      } else {
        return [...prevFavorites, movie];
      }
    });
  };

  const toggleFavoritesSection = () => {
    setShowFavorites(!showFavorites); 
  };

  return (
    <>
      <Sort trii={handleSort} />
      <SearchBar searchTerm={search} onSearch={setSearch} />

      <button onClick={toggleAddFilmForm} className={style.favoriteButton}>
        {showAddFilmForm ? "Cacher le formulaire" : "Ajouter un Film"}
      </button>
      {showAddFilmForm && <Ajouterfilm onAddFilm={handleAddFilm} />}

      <button onClick={toggleFavoritesSection} className={style.favoriteButton}>
        {showFavorites ? "Cacher les favoris" : "Voir les favoris"}
      </button>

      {showFavorites && favorites.length > 0 && (
        <div>
          <h2>Favoris</h2>
          {favorites.map((elt) => (
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
                <button
                  value={elt.title}
                  onClick={() => details(elt)}
                  className={style.but}
                >
                  Voir les détails
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {currentFilms.map((elt) => (
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
            <button
              value={elt.title}
              onClick={() => details(elt)}
              className={style.but}
            >
              Voir les détails
            </button>
          </div>
        </div>
      ))}

      <Pagination actuelle={actuel} total={totalPages} paginate={paginate} />

      {film && <Filmdetails det={film} />}
    </>
  );
}

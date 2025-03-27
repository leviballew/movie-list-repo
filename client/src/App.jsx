import { useState, useEffect } from 'react';
import './App.css';

const API_BASE = 'http://localhost:3000';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newMovieTitle, setNewMovieTitle] = useState('');

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE}/movies`);
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Failed to get movies', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const addMovie = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie_title: newMovieTitle })
      });
      const addedMovieArray = await response.json();
      if (addedMovieArray.length > 0 && addedMovieArray[0].movie_title) {
        setMovies([...movies, addedMovieArray[0]]);
        setNewMovieTitle('');
      } else {
        console.error('Invalid movie data:', addedMovieArray);
      }
    } catch (error) {
      console.error('Failed to add movie', error);
    }
  };


  const filteredMovies = movies.filter(movie =>
    movie.movie_title ? movie.movie_title.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );


  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {isLoading ? <li>Loading movies...</li> : filteredMovies.map(movie => (
            <li key={movie.id}>{movie.movie_title}</li>
          ))}
        </ul>
        <form onSubmit={addMovie}>
          <input
            type="text"
            placeholder="Enter a new movie title"
            value={newMovieTitle}
            onChange={(e) => setNewMovieTitle(e.target.value)}
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </>
  );
}

export default App;
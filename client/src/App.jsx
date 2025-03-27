import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const API_BASE = 'http://localhost:3000';


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const movie_response = await fetch(`${API_BASE}/movies`);
      const movie_data = await movie_response.json();
      setMovies(movie_data);

    } catch (error) {
      console.error('Failed to get movies', error)
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  console.log(movies);

  return (
    <>
      <div>
        <ul>
          <li>This Is A Simulation</li>
          {movies.map(movie => (
            <li>{movie.movie_title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
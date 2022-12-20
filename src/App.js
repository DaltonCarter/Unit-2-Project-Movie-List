import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './App.css';
import Header from './components/Header/Header';
import MovieScreen from './components/MovieScreen/MovieScreen';
import Watchlist from './components/Watchlist/Watchlist';

function App() {

const [movieList, setMovieList] = useState([])
const [watchList, setWatchList] = useState([])
const [page, setpage] = useState(1)

const getData = () => {
  Axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&Language=en-us&page=${page}`)
    .then((res) => {
      console.log(res.data.results)
      setMovieList(res.data.results)
    })
}

useEffect(() => {
  getData()
}, [page])


const addMovie = (movie) => {
  setWatchList([...watchList, movie])
}


const removeMovie = (movie) => {
  let newState = watchList.filter((mov) => mov !== movie)
  setWatchList(newState)
}


  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen 
        addMovie={addMovie} 
        list={watchList} 
        page={page} 
        setPage={setpage} 
        movieList={movieList} 
        removeMovie={removeMovie}
        />

        <Watchlist 
        list={watchList} 
        removeMovie={removeMovie}
        />
        
      </main>
    </div>
  );
}

export default App;

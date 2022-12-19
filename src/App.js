import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './App.css';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';

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



  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen list={watchList} page={page} setPage={setpage} movieList={movieList} />
      </main>
    </div>
  );
}

export default App;

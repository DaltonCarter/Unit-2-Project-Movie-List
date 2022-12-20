import React from 'react'


const MovieCard = ({movie, addMovie, list , removeMovie}) => {

    let inWatchList = list.filter((mov) => mov.id === movie.id)

    const button= 
        inWatchList.length === 0 ? (
            <button onClick={() => addMovie(movie)}>Add to list</button>
            ) : (
                <button onClick={() => removeMovie(movie)}>Remove</button>
            )
        

    return (
        <div className='movie-card'>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}  alt={movie.original_title}/>
                <h3>{movie.original_title}</h3>
            </div>
            {button}
        </div>
    )
}

export default MovieCard
import React from 'react'
import PopularMovies from "../../hooks/PopularMovies";
import { MoviesCard } from '../index';

export default function MoviesPopular() {
  const dataPopularMovies = PopularMovies();
  // console.log(dataPopularMovies)

  const renderPopularMovies = dataPopularMovies.map((movie) => {
    // let options = { year: "numeric", month: "long", day: "numeric" };
    // let releaseDate = new Date(movie.release_date);

    return (
      <div key={`${movie}:${movie.id}`}>
        <MoviesCard
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
        />
      </div>
    );
  });

  return (
    <>
      {renderPopularMovies}
    </>
  )
}



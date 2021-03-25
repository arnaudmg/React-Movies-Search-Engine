import React from 'react'
import UpComingMovies from "../../hooks/UpComingMovies";
import { MoviesCard } from "../index";

export default function MoviesUpComing() {
  const data = UpComingMovies();

  const renderUpComingMovies = data.map((movie) => {
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
      {renderUpComingMovies}
    </>
  )
}
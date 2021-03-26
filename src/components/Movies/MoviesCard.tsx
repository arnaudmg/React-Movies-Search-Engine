import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 17.5em;
  margin: 0.8em;
  transition: all 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
  img {
    width: 15.625em;
    height: 23.75em;
    border-radius: 2px;
  }
`;

const Title = styled.p`
  line-height: 1.25em;
  font-weight: bold;
  margin: 0.7em 0 0.3em 0;
`;

type MoviesCardProps = {
  title: string;
  poster: string;
  id: string;
};

export default function MoviesCard({
  id,
  title,
  poster,
}: MoviesCardProps) {
  const idPage = window.location.pathname.substr(1,5); 
  const renderImage = () => {
    if(poster!==null){
      return(
        <img
        src={`https://image.tmdb.org/t/p/w300/${poster}`}
        alt="movie poster"
      />
      ) 
    } else{
      return(
        <img
        src={`http://nerdsontherocks.com/wp-content/uploads/2012/01/movie-poster-coming-soon.png`}/>
      )
    }
  }
  return (
    <CardContainer onClick = { () => window.scrollTo(0,0)}>
      <Link to={idPage === 'movie' ? `${id}` :`movie/${id}`}>
        {renderImage()}
        <Title>{title}</Title>
      </Link>
    </CardContainer>
  );
}
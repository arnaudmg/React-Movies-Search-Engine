import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import MovieSearch from "../hooks/MovieSeach";
import BackgroundImg from "../background.jpg"; 

import {
  InputComponent,
  MoviesCard,
  PopularMovies,
  MoviesUpComing,
} from "../components/index";

const HeroSection = styled.div`
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 70vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Heading = styled.div`
  margin-top: 5em;
  font-weight: 900;
  line-height: 80px;
  font-family: Poppins;
  font-size: 25px;
  text-align: center;
  h1 {
    font-size: 2rem;
    font-family: Poppins;
    color: ${(props) => props.theme.colors.primary};
    @media ${device.laptop} {
      font-size: 5rem;
    }
  }
`;

const SearchInput = styled(InputComponent)`
  width: 80%;
  margin-top: 2em;
  @media ${device.laptop} {
    max-width: 40em;
  }
  input {
    height: 3.5em;
    background-color: white;
    color: black;
    font-family: Poppins;
  }
`;

const MoviesListLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`;

const MoviesListContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    align-items: flex-start;
  }
`;

const MoviesCardContainer = styled.div<{ fullWidth?: boolean }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoriesTitle = styled.h3`
  font-family: Poppins;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 2.1em;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  @media ${device.laptop} {
    font-size: 3rem;
  }
`;

const SearchTitle = styled.h3`
  font-size: 2rem;
  font-family: Poppins;
  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.5rem;
  }
`;

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() =>{
      MovieSearch(search).then(data => {
        console.log(data)
        setDataMovies(data.results)
      })
  }, [search])
  

  const renderMovies = dataMovies.map((movie) => {
    if(movie){

    return (
      <div key={`${movie}:${movie["id"]}`}>
        <MoviesCard
          id={movie["id"]}
          title={movie["title"]}
          poster={movie["poster_path"]}
        />
      </div>
    );
    }

  });

  return (
    <PageLayout>
      <HeroSection>
        <Heading>
          <h1> Bienvenue sur FILMANIA !</h1>
          <p>Des milliers de films, séries et artistes à découvrir !</p>
    
        </Heading>

        <SearchInput
          type="text"
          id="search"
          placeholder="Si tu recherches un film précis..."          
          handleChange={ (event) =>  {
            MovieSearch(event.target.value)
            setSearch(event.target.value)
          }}
          />


           

                    

        {search.length > 0 && (
          <SearchTitle>
            Results for <span>"{search}"</span>
          </SearchTitle>
        )}
      </HeroSection>

      {search ? (
        <MoviesListLayout>
          <MoviesCardContainer>{renderMovies}</MoviesCardContainer>
        </MoviesListLayout>
      ) : (
        <>
          <MoviesListLayout>
            <MoviesListContainer>
              <CategoriesTitle>Popular</CategoriesTitle>
              <MoviesCardContainer fullWidth>
                <PopularMovies />
              </MoviesCardContainer>
            </MoviesListContainer>
          </MoviesListLayout>

          <MoviesListLayout>
            <MoviesListContainer>
              <CategoriesTitle>Up Coming</CategoriesTitle>
              <MoviesCardContainer fullWidth>
                <MoviesUpComing />
              </MoviesCardContainer>
            </MoviesListContainer>
          </MoviesListLayout>
        </>
      )}
    </PageLayout>
  );
}

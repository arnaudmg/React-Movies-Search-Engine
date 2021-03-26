import React, { useState, useEffect } from "react";
import useMoviesId from "../hooks/MoviesID";
import styled from "styled-components";
import { PopularMovies } from "../components/index";
import PageLayout from "../Layout/PageLayout";
import device from "../theme/device";
import StarsRate from "../components/StarsRate" 


const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 35px;
  h1 {
    font-size: 3em;
    font-family: Poppins;
    font-weight: bold;
    margin-top: 1em;
    max-width: 30em;
    text-align: center;
    @media ${device.tablet} {
      margin-top: 0;
      text-align: start;
    }
  }
  h2 {
    font-size: 1em;
    margin-top: 0.5em;
    margin-bottom: 1em;
    color: ${(props) => props.theme.colors.grey};
  }
  p {
    margin-top: 0.5em;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 300;
    max-width: 60em;
  }
`;

const DetailsMovie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  font-family: Open Sans;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: initial;
  }
`;

const FlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

const StyledTitle = styled.p`
  font-size: 1.em;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  margin-top: 2em;
`;

const Overview = styled.p`
  && {
    margin-top: 1em;
    margin-bottom: 2em;
    line-height: 1.25em;
    color: #BABABA;
  }
`;

const LayoutStyled = styled(PageLayout)`
  main {
    padding: 0 2em;
    align-items: center;
  }
`;

const UpComingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5em;
  h5 {
    font-size: 2.5rem;
    font-family: Poppins;
    margin-bottom: 0.5em;
    color: ${(props) => props.theme.colors.primary};
    @media ${device.laptop} {
      align-self: flex-start;
  }
  }
`;

const UpComingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export default function MovieDetailsPage() {
  const idPage = window.location.pathname.substr(7);
  const [movieId, setMovieId] = useState("");

  useEffect(() => {
    setMovieId(idPage);
  }, [idPage]);

  const dataMovies = useMoviesId({ movieId: movieId });

  return (
    <LayoutStyled>
      {/* <HeadTag title="Movie details" /> */}

      <ResumeContainer>
        <DetailsMovie>
          <img
            style={{
            //   maxWidth: "20em",
              objectFit: "cover",
              marginRight: "2em",
              borderRadius: "8px",
              width: "35%",
              marginLeft: "80px",
            }}
            src={`https://image.tmdb.org/t/p/w300/${dataMovies.poster_path}`}
            alt="movie poster"
          />
          <FlexColumn>
            <h1>{dataMovies.title}</h1>
            <h2>{dataMovies.tagline}</h2>
            <OverviewContainer>
              <StyledTitle>Synopsis and details</StyledTitle>
              {dataMovies.adult && <p>Adult movie</p>}
              <Overview>{dataMovies.overview}</Overview>
            </OverviewContainer>
            <p>
              <StyledSpan>Release date :</StyledSpan> {dataMovies.release_date}
            </p>
            <p>
              <StyledSpan>Duration :</StyledSpan> {dataMovies.runtime} minutes
            </p>
            {dataMovies.genres && (
            <p>
                <StyledSpan>Genre :</StyledSpan>
                    &nbsp;{dataMovies.genres[0].name}
              </p>
            )}
                <StarsRate stars={dataMovies.popularity/2}/>
                
                <a href={`https://www.youtube.com/watch?v=${dataMovies.video}`}><button style={{
                 boxShadow:"inset 0px 1px 3px 0px #d00000",
                 backgroundColor:"#D00000",
                 borderRadius:"5px",
                 border:"1px solid #d00000",
                 display:"inline-block",
                 cursor:"pointer",
                 color:"#ffffff",
                 fontFamily:"Poppins",
                 fontSize:"18px",
                 fontWeight:"bold",
                 padding:"11px 23px",
                 textDecoration: "none",
                 marginTop:"25px",
            }}>Voir la Bande-Annonce</button></a>
                <button style={{
                 boxShadow:"inset 0px 1px 3px 0px #d00000",
                 backgroundColor:"transparent",
                 borderRadius:"5px",
                 border:"1px solid #d00000",
                 display:"inline-block",
                 cursor:"pointer",
                 color:"#ffffff",
                 fontFamily:"Poppins",
                 fontSize:"18px",
                 fontWeight:"bold",
                 padding:"11px 23px",
                 textDecoration: "none",
                 marginTop:"25px"
            }}>D'autres films de cette catégorie</button>
          
            
          </FlexColumn>

         
        </DetailsMovie>
      </ResumeContainer>
      <UpComingContainer>	
        <h5>Most Popular Movies</h5>	
        <UpComingWrapper>	
            <PopularMovies />	
        </UpComingWrapper>	
      </UpComingContainer>
    </LayoutStyled>
  );
}
import axios from "axios";
import { APIKEY } from "./constant";
import useFetcher from "./useFetcher";



const MovieSearch = async ( search :string) => {
  if (search.length){
    try {
      const request = await axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${search}`);
      return request.data;
    } catch (error) {
      console.log(error)
    }
  } else{
      try {
        const request = await axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=null`);
        return request.data;
      } catch (error) {
      console.log(error)
    }
  }
}

export default MovieSearch;
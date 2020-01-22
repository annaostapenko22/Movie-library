import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMoviesHits = async () => {
    try {

        const data = await axios.get(
          `trending/all/day?api_key=fd2d5e41476f195bd82f8f4bde4b97a7`
        );
        return data.data.results.map(movie => ({
          title: movie.title || movie.name,
          id: movie.id
        }));
    }
    catch(err){
        throw err;
    }
};

export const getMovieById = async id => {
    try {

        const data = await axios.get(
          `movie/${id}?api_key=fd2d5e41476f195bd82f8f4bde4b97a7`
        ); 
            return {
              title: data.data.title,
              id: data.data.id,
              overview: data.data.overview,
              genres: data.data.genres,
              score: data.data.vote_count,
              path: data.data.poster_path
            };
    }
    catch(err){
        console.log("ERROR")
        throw err;
    }
};

export const movies = async () => {
  const data = await axios.get(
    `trending/all/day?api_key=fd2d5e41476f195bd82f8f4bde4b97a7`
  );
  return data;
};

export const getMovie = async id => {
  const data = await axios.get(
    `movie/${id}?api_key=fd2d5e41476f195bd82f8f4bde4b97a7`
  );
  return data.data;
};

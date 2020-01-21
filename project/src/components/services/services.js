import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";



export const getMoviesHits = async() => {
const data = await axios.get(`trending/all/day?api_key=fd2d5e41476f195bd82f8f4bde4b97a7`);
return data.data.results.map(movie=>({
    title: movie.title || movie.name,
    id: movie.id
}));

}

export const movies = async() => {
    const data = await axios.get(`trending/all/day?api_key=fd2d5e41476f195bd82f8f4bde4b97a7`);
    return data;
    
    }
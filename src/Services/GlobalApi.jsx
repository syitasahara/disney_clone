import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d4932944a70b643f63a21faf8f3f6019";

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d4932944a70b643f63a21faf8f3f6019';
// const movieByGenreBaseURL='https://api.themoviedb.org/3/movie/550?api_key=d4932944a70b643f63a21faf8f3f6019';

const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

const getGenreList=()=>axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=d4932944a70b643f63a21faf8f3f6019')

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres=" + id)

export default {
    getTrendingVideos,
    getMovieByGenreId,
    getGenreList
};

// import axios from "axios";

// const movieBaseUrl="https://api.themoviedb.org/3"
// const api_key='2ec0d66f5bdf1dd12eefa0723f1479cf'

// const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

// //https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
// const getTrendingVideos=axios.get(movieBaseUrl+
//     "/trending/all/day?api_key="+api_key);
//     const getMovieByGenreId=(id)=>
//     axios.get(movieByGenreBaseURL+"&with_genres="+id)

// export default{
//     getTrendingVideos,
//     getMovieByGenreId
// }
import axios from "axios";

const keyApi = "7dbf79a7ec9fee0ed11175b6a2c600f3";

export default {
  async getData() {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${keyApi}`
        )
        .then(data => data.data.results);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async getCasts(id) {
    try {
      const data = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${keyApi}`
        )
        .then(data => data.data.cast);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  async searchMovies(searchValue) {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${searchValue}&language=en-US&page=1&include_adult=false`
      );
      return data.data.results;
    } catch (err) {
      throw err;
    }
  }
};

// `https://api.themoviedb.org/3/search/movie?api_key=${keyApi}&query=${searchValue}&page=1`

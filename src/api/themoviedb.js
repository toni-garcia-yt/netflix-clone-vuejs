import apikey from './apikey.js';
const API_KEY = apikey.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

import axios from 'axios'

export default {
  fetchs: {
    fetchRandomMovies() {
        return axios
            .get(baseUrl+'discover/movie?api_key='+API_KEY)
    },
    fetchMoviesByGenre(genre) {
      return axios
          .get(baseUrl+'discover/movie?api_key='+API_KEY+'&with_genres='+genre)
    },
    fetchGenres() {
        return axios
            .get(baseUrl+'genre/movie/list?api_key='+API_KEY)
    }
  },
}

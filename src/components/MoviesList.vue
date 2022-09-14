<template>
  <div id="movies-list" class="row">
    <div class="col-12">
        <h5>
            {{genre.name}} 
        </h5>
    </div>
    <div class="col-12 d-flex posters">
        <div 
            v-for="movie in movies" :key="movie.id"
        >
            <img  
                v-if="movie.backdrop_path !== null"
                class="poster-movie"
                :src="'https://image.tmdb.org/t/p/w300/'+movie.backdrop_path" 
                @click="displayMovieDetail = true; detailMovie = movie;"
            >
        </div>
    </div>
 
  </div> 

  <MovieDetail 
    v-if="displayMovieDetail"
    @close="displayMovieDetail = false"
    :movie="detailMovie"
  /> 

</template>

<script>
import themoviedb from '../api/themoviedb.js';
import MovieDetail from '../components/MovieDetail.vue'

export default {
  components: {
    MovieDetail
  },
  props: {
    genre: null
  },
  data() {
    return {
      movies: [],
      displayMovieDetail: false,
      detailMovie: null
    }
  },
  created(){
    this.getMoviesByGenre();
  },
  methods: {
    async getMoviesByGenre(){
      let response = await themoviedb.fetchs.fetchMoviesByGenre(this.genre.id);
      this.movies = response.data.results;
    },
  },
}
</script>


<style scoped>
    h5 {
        margin-left: 30px;
    }

    .posters {
        overflow-y: hidden;
        overflow-x: scroll;
        padding: 20px;
        margin-bottom: 35px;
    }

    .posters::-webkit-scrollbar {
        display: none;
    }

    .poster-movie {
        width: 250px;
        max-height: 150px; 
        /* max-height: 100px; */
        margin: 10px;
    }

    .poster-movie:hover {
        transform: scale(1.10);
    }
</style>
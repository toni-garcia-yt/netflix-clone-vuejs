<template>
    <div 
        id="banner" 
        class="row"
        :style="{
          backgroundImage: (movie.backdrop_path === undefined) ?
            ''
            :'url(https://image.tmdb.org/t/p/original/'+movie.backdrop_path+')',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
         
        }"
    >
        <div id="banner_contents">
            <h1> {{movie.title}} </h1>
            <div class="banner_description">
              {{  truncateOverview }} 
            </div>
            
            <div class="banner_buttons">
              <button class="banner_button" @click="displayMovieDetail=true"> Play </button>
              <button class="banner_button" @click="displayMovieDetail=true"> More infos </button>
            </div>
            
        </div>
        
    </div>

    <MovieDetail 
      v-if="displayMovieDetail"
      @close="displayMovieDetail = false"
      :movie="movie"
    /> 
</template>

<script>
import themoviedb from '../api/themoviedb.js';
import MovieDetail from '../components/MovieDetail.vue'

export default {
  components: {
    MovieDetail
  },
  data() {
    return {
        movie: {},
        displayMovieDetail: false
    }
  },
  created(){
    this.getRandomMovie();
  },
  computed: {
    truncateOverview(){
      if(this.movie.overview !== undefined ){
        return this.movie.overview.substring(0, 250) + '...';
      }
    }
  },
  methods: {
    async getRandomMovie(){
      let response = await themoviedb.fetchs.fetchRandomMovies();
      let movies = response.data.results;
      console.log(movies);
      this.movie = movies[Math.floor(Math.random() * 10)];
    },
  },
}
</script>


<style scoped>
  #banner {
    height:  450px;
    margin-bottom: 50px;
  }

  #banner_contents {
    padding-top: 150px;
    padding-left: 50px;
    color: white;
  }

  .banner_description {
    max-width: 450px;
  }

  .banner_buttons {
    margin-top: 20px;
  }

  .banner_button {
    border: none;
    margin-right: 20px;
    margin-top: 5px;
    background-color: rgba(51, 51, 51, 0.7);
    color: white;
    padding: 5px 15px;
    border-radius: 4px;
  }

  .banner_button:hover {
    background-color: rgba(51, 51, 51, 1);
  }
</style>
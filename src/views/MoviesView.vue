<template>
  <div id="movies-view" class="container-fluid">
      <Nav  /> 

      <MovieBanner  />

      <MoviesList
        v-for="genre in genres" :key="genre.id"
        :genre="genre"
      /> 
  
  </div> 
</template>

<script>
import themoviedb from '../api/themoviedb.js'
import MoviesList from '../components/MoviesList.vue'
import MovieBanner from '../components/MovieBanner.vue'
import Nav from '../components/Nav.vue'

export default {
  components: {
    MoviesList,
    MovieBanner,
    Nav
  },
  data() {
    return {
      genres: []
    }
  },
  created(){
    this.getGenres();
  },
  methods: {
    async getGenres(){
      let response = await themoviedb.fetchs.fetchGenres();
      this.genres = response.data.genres.slice(0, 10);
    },
  },
}
</script>


<style scoped>
    #movies-view {
      background-color: #141414;
      height: 100% ;
    }
</style>
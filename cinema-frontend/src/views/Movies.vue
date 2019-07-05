<template>
  <div class="movies">
    <h1>IronHack Cinema</h1>Click on a movie to check the showtimes
    <div class="grid-container">
      <div class="item" v-for="(movie, index) in movies" :key="index">
        <img :src="movie.image" alt="" class="img" @click.shift.exact="shiftClick"/>
        <h3 class="movie-title">{{movie.title}}</h3>
        <router-link :to="{name: 'movie', params: {id: movie._id}}" class="link"
        >See more</router-link>
      </div>
    </div>
  </div>
</template>

<script>

import Movie from '@/components/Movie.vue'

export default {
  name: 'Movies',
  data() {
    return{
      movies: []
    }
  },
  methods: {
    shiftClick () {
      return console.log('Funciona!')
    }
  },
  mounted(){
    fetch('http://localhost:3000/movies')
    .then((data) => (data.json()))
    .then((res) => this.movies = res)
  }
}
</script>

<style scoped>

.movies{
  padding: 50px;
}

.grid-container {
  height: 95vh;
  display: flex;
  flex-flow: row wrap;

  }

.img {
  padding: 15px;
  width: 100px;
  }

.item {
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

.movie-title {
  margin-top: 15px; }

.link {
  text-decoration: none;
  margin-top: 15px; }


</style>


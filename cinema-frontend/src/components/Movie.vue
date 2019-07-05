<template>
  <div class="container">
  <img :src="movie.image" :alt="movie.title" class="img">
  <div class="container-movie">
    <router-link to="/movies" class="link link--movie">Go back</router-link>
    <h3 class="movie-title movie-title--movie"></h3>
    <h4 class="director">Director: {{movie.director}}</h4>
    <h5 class="stars-title">Stars</h5>
    <ul class="stars">
      <li v-for="(star, index) in movie.stars" :key="index">{{star}}</li>
    </ul>
    <p class="description">{{movie.description}}</p>
    <ul class="showtimes"> |
      <li class="showtime" v-for="(showtimeItem, index) in movie.showtimes" :key="index">
        {{showtimeItem}} 
      </li> 
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Movie',
  props: {
    id: String
  },
  data(){
    return{
      movie: {}
    }
  },
  mounted(){
    let url = 'http://localhost:3000/movies/' + this.id;
    fetch(url)
    .then((data) => (data.json()))
    .then((res) => this.movie = res)
    console.log(url)
  }
}
</script>

<style scoped>

  .container {
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; }


.container-movie {
  width: 50%;
  height: 90%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start; }

.movie-title--movie {
  text-align: center;
  margin-bottom: 15px; }

.director, .stars-title, .stars, .showtimes {
  margin: 15px 0; }

.showtimes {
  list-style-type: none;
  display: flex;
  flex-flow: row; }

.showtime {
  margin: 0 15px; }

  .img {
  padding: 15px; }

  .link {
  text-decoration: none;
  margin-top: 15px; }
</style>


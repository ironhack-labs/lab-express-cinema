<template>
  <div class="movies">
    <router-link to="/" class="link"
        ><h1>IronHack Cinema</h1></router-link>
    
    <p>SHIFT + CLICK EN LA PELICULA QUE QUIERAS EDITAR</p>
    <span>Click on a movie to check the showtimes</span>
    <router-link to="/newMovie" class="btn">New movie!</router-link>
    <div class="grid-container">
      <div class="item" v-for="(movie, index) in movies" :key="index">
        <img :src="movie.image" alt="" class="img" @click.shift.exact="shiftClick(movie)"/>
        <h3 class="movie-title">{{movie.title}}</h3>
        <router-link :to="{name: 'movie', params: {id: movie._id}}" class="link"
        >See more</router-link>
      </div>
    </div>
    <EditModal v-if="showModal" @close="showModal = false" @edited="closeModal" :item="willEdit"></EditModal>
  </div>
</template>

<script>

import EditModal from '@/components/EditModal.vue'

export default {
  name: 'Movies',
  components: {
    EditModal
  },
  data() {
    return{
      movies: [],
      willEdit: '',
      showModal: false,
    }
  },
  methods: {
    shiftClick (movie) {
      this.willEdit = movie;
    return this.showModal = true;
    },
    getMovies() {
      fetch('http://localhost:3000/movies')
      .then((data) => (data.json()))
      .then((res) => this.movies = res)
    },
    closeModal () {
      this.getMovies();
      this.showModal = false
    }
  },
  mounted(){
    this.getMovies()
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

  .btn {
    display: block;
  border-radius: 50px;
  background-color: red;
  color: white;
  padding: 15px 20px;
  text-decoration: none; }


</style>


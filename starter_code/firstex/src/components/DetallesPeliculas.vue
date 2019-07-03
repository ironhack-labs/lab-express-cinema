<template>
  <div class="principal">
    <button><router-link to="/peliculas">Regresar</router-link></button>
    <ul>
      <li v-for="(star, index) in pelicula.stars" :key=index > {{star}} </li>
    </ul>
    <p>Times</p>
    <ul>
      <li v-for="(showtimes, index) in pelicula.showtimes" :key=index > {{showtimes}} </li>
    </ul>
    <img :src="pelicula.image" />
    {{pelicula.title}}
    
  </div>
</template>


<script>
export default {
  name:"peliculasDetalles",
  props: ['id'],
  data(){
    return{
      pelicula:{}
    }
  },
  mounted() {
    fetch('http://localhost:3000/movies/' + this.id)
    .then((data) => (data.json()))
    .then((res) =>this.pelicula = res )
  },
};
</script>

<style scoped>
</style>
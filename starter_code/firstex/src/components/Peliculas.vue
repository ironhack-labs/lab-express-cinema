<template>
  <div id="peliculas">
  listado de peliculas
    <div class="ListadoDePeliculas">
      <div class="pelicula" v-for="(pelicula, index) in peliculas":key=index>
        <img :src=pelicula.image>
          <p>{{pelicula.title}}</p>
          <router-link :to="{name: 'peliculasDestalle', params:{id:pelicula._id}}"> Detalle</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'peliculas',
  data(){
      return{
        peliculas:[]
      }
  },
  mounted() {
    fetch('http://localhost:3000/movies')
    .then((data) => (data.json()))
    .then((res) =>this.peliculas = res )
  },

};
</script>

<style scoped>
</style>

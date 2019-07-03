<template>
  <div>
    <router-link :to= "{name:'listadoPeliculas'}"> Regresar</router-link>
  <img :src="pelicula.image">
 
  </div>
  
</template>

<script>

export default {
  name: 'peliculaDetails',
  props: ['id'],
  data(){
    return {
      pelicula: {}
    };
  },
  mounted() {
   fetch('http://localhost:3000/movies' + this.id)
   .then((data) => (data.json()))
   .then((res) => this.pelicula = res)
 },
}
</script>

<style scoped>

</style>

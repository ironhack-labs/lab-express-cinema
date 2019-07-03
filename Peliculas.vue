<template>
  <div id="Peliculas">
    Listado de Peliculas
    <div class="listadoPeliculas">
      <div class = "pelicula" v-for="(pelicula, index) in peliculas" :key ="index">
        <img :src="pelicula.image" alt="">
        <p>{{ pelicula.title }}</p>
        <router-link :to="{name:'PeliculaDetails', params: {id: peliculas._id}}">Revisa los Detalles</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default{
 name:"Peliculas",  
 data(){
   return{
     peliculas:[]
   }
 },
 mounted() {
   fetch('http://localhost:3000/movies')
   .then((data) => (data.json()))
   .then((res) => this.peliculas = res)
   .catch(err => console.log(err))
 },
}
</script>

<style scoped>
  
</style>
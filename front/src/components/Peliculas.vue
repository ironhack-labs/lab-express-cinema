<template>

    <div class="peliculas">
        <h3>Listado de Peliculas</h3>
        <div class="listadoDePeliculas">

            <div class="pelicula"
                 v-for="(pelicula, index) in peliculas"
                 :key="index"
                 style="margin-bottom: 20px"
            >
                <img :src="pelicula.image" alt=""/>
                <p>{{pelicula.title}}</p>

                <router-link :to="{name:'detallePelicula', params: {id:pelicula._id}}">
                    Detalles
                </router-link>
            </div>

        </div>
    </div>


</template>

<script>

    export default {
        name: "Peliculas",
        data() {
            return {
                peliculas: []
            }
        },
        mounted(){

            fetch('http://localhost:3000/movies')
                .then((response)=>{
                    return response.json()
                })
                .then((json) =>{
                    this.peliculas =json;
                })
                .catch(error=>{
                    alert(error);
                })


        }
    }

</script>

<style scoped>


</style>

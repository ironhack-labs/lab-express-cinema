<template>

    <div class="peliculas">
        <h3>Listado de Peliculas</h3>
        <div class="listadoDePeliculas">

            <div class="pelicula"
                 v-for="(pelicula, index) in peliculas"
                 :key="index"
            >
                <img :src="pelicula.image" alt=""/>
                <p>{{pelicula.title}}</p>
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
        }
    }

</script>

<style scoped>


</style>

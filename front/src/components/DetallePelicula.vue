<template>

    <div class="detalle">
        <h4>
            <router-link :to="{name:'listadoPeliculas'}">Regresar</router-link>
        </h4>

        <img :src="pelicula.image" alt="" style="margin-bottom: 10px; margin-top: 20px"/>
        <small style="text-align: center">Title</small>
        <h2>{{pelicula.title}}</h2>
        <small>Description</small>
        <p>{{pelicula.description}}</p>


    </div>


</template>

<script>

    export default {
        name: "DetallePelicula",
        props: ['id'],
        data() {
            return {pelicula: {}}
        },
        mounted() {
            fetch('http://localhost:3000/movies/' + this.id)
                .then((response) => {

                    return response.json()
                })
                .then((json) => {
                    this.pelicula = json;
                })
                .catch(error => {
                    alert(error);
                })


        }
    }

</script>

<style scoped>


</style>

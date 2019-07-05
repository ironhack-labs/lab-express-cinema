<template>

    <div class="principal">
        <div>

            <h3 style="color: #fff; font-size: 14px">Ironhack Cinema</h3>
            <button >
                <router-link to="/peliculas">Check the movies</router-link>
            </button>

            <button >
                <router-link to="/nuevapeli">NuevaPeli</router-link>
            </button>
        </div>
    </div>


</template>

<script>

    export default {
        name: "Principal"
    }

</script>

<style scoped>

    .principal{
        background-image: url('../assets/images/cinema.jpg');
        background-repeat: no-repeat;
        background-size: 1000px 668px;
        height: 100vh;
    }

</style>

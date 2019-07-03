<template>
  <div class="principal">
    <h1>Cinema Ironhack</h1>
    <button>
      <router-link to = "/peliculas">Check the Movies</router-link>
    </button>
  </div>
</template>

<script>
export default{
 name:"Principal.vue"
}
</script>

<style scoped>
body{
  margin:0;
  padding: 0;
}
  .principal{
    background: url(../assets/cinema.jpg)no-repeat;
    background-size: 1000px 500px;
    height: 100vh;
  }
  h1{
    color: white;
    position: absolute;
    left: 40%;
    top: 15%;
    font-size: 50px;
  }
  button{
    border-radius: 25px;
    padding: 15px;
    position: absolute;
    top: 40%;
    left: 51%;
  }
</style>
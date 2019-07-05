<template>
  <div class="principal">
    <div class="container">
      <span class="titulo">Cinema Ironhack</span>
      <router-link to="/movies" class="btn">Check the movies!</router-link>
      <router-link to="/newMovie" class="btn">New movie!</router-link>
      <!-- <a href="/movies" class="btn">Check the movies!</a> -->
    </div>
  </div>
</template>

<script>

export default {
  name: "home"
};
</script>

<style scoped>
  .container {
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end; }

.principal {
  background: url("../assets/cinema.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center; }

.btn {
  border-radius: 50px;
  background-color: white;
  color: #777777;
  padding: 15px 20px;
  text-decoration: none; }

.titulo {
  font-size: 78px;
  color: white;
  text-align: right;
  margin-bottom: 30px; }
</style>


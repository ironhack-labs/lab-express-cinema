<template>
  <form action method="post" class="form" v-on:submit.prevent="sendData">
    <div class="item">
      <label for="titulo">Ingresa el título de la película</label>
      <input type="text" name="titulo" id="titulo" v-model="titulo" />
    </div>
    <div class="item">
      <label for="foto">Ingresa la URL del póster de la película</label>
      <input type="url" id="foto" name="foto" v-model="foto" />
    </div>
    <div class="item">
      <button type="submit" @click="$router.go(-1)">Enviar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "NewMovie",
  data() {
    return {
      titulo: "",
      foto: ""
    };
  },
  methods: {
    sendData () {
      fetch('http://localhost:3000/movies', {
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({titulo: this.titulo, foto: this.foto})
      })
      .then(data => {
        console.log('guardado')
      }).catch(err => alert('Error, no se guardó la película', err))
    },
  }
};
</script>

<style scoped>
.form {
  width: 50%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
}

.item {
  margin: 15px 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 15px;
}

input {
  height: 44px;
  border-radius: 11px;
  border-style: solid;
  font-size: 2em;
  padding: 10px;
}

button {
  padding: 10px;
  border-radius: 11px;
  font-size: 2em;
}
</style>




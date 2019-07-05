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
      <button type="submit">Enviar</button>
      <router-link to="/">
        <button type="menu">Go back</button>
      </router-link>
      <router-link to="/movies">
        <button type="menu">Ir a películas</button>
      </router-link>
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
        alert('Todo se guardo bien', data.text)
        this.titulo = '';
        this.foto = '';
      }).catch(err => alert('Error, no se guardó la película', err))
    },
    // sendData() {
    //   (async () => {
    //     const res = await fetch("http://localhost:3000/movies", {
    //       method: "POST",
    //       headers: {
    //         'Accept': "application/json",
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({ titulo: this.titulo, foto: this.foto })
    //     });
    //     const content = await res.json();
    //     this.titulo = '';
    //     this.foto = '';
    //     console.log(content);
    //   })();
    // }
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




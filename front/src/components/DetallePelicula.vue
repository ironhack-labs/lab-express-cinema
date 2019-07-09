<template>


  <div class="detalle" style="padding: 20px">

    <h4>
      <router-link :to="{name:'listadoPeliculas'}">Regresar</router-link>
    </h4>


    <div style="display: flex; text-align: left" v-show="isLoaded">
      <div style="width: 400px">
        <img :src="pelicula.image" alt="" style="margin-bottom: 10px; margin-top: 20px"/>
      </div>
      <div style="padding-left: 10px">

        <div v-show="!isEdit">
          <p style="text-align: right">
            <button @click="onEditClick">Editar</button>
          </p>

          <h5>Title</h5>
          <h2>{{pelicula.title}}</h2>
          <h5>Description</h5>
          <p>{{pelicula.description}}</p>
          <h5>Director</h5>
          <p>{{pelicula.director}}</p>

        </div>

        <div v-show="isEdit">


          <form method="post"
                v-on:submit.prevent="onSaveClick"
          >
            <h5>Titulo</h5>
            <input
                v-model="data.title"
                type="text" required/>

            <h5>Descripcion</h5>
            <input
                v-model="data.description"
                type="text" required/>


            <h5>Director</h5>
            <input
                v-model="data.director"
                type="text" required/>

            <div style="margin-top: 20px">
              <button type="submit">Guardar</button>
              <span @click="onCancel" style="margin-left: 20px">Cancelar</span>

            </div>

          </form>

        </div>

      </div>

    </div>


  </div>


</template>

<script>

  let listaCamposModificados = ['title', 'description', 'director'];

  export default {
    name: "DetallePelicula",
    props: ['id'],
    data() {
      return {
        pelicula: {},
        data: {title: '', description: '', director: ''},
        isEdit: false,
        isLoaded: false
      }
    },
    methods: {
      onEditClick() {
        this.data = JSON.parse(JSON.stringify(this.pelicula));
        this.isEdit = true;
      },
      onCancel() {
        this.isEdit = false;
      },
      onSaveClick() {

        let url = 'http://localhost:3000/movies/' + this.id;
        let model = {};

        listaCamposModificados.forEach(c => {
          model[c] = this.data[c];
        });

        fetch(url, {
          mode: 'cors',
          method: 'PUT',
          headers: {
            "Accept": "application/json",
            'Content-Type': "application/json"
          },
          body: JSON.stringify(model)
        })
            .then((response) => {
              return response.json();

            }).then((json) => {
          listaCamposModificados.forEach(c => {
            this.pelicula[c] = this.data[c];
            this.isEdit=false;
          })
          ;
        }).catch(error => {

          alert(error);
        })

      }
    },
    mounted() {
      this.isEdit = false;

      fetch('http://localhost:3000/movies/' + this.id)
          .then((response) => {

            return response.json()
          })
          .then((json) => {
            this.pelicula = json;
            this.isLoaded = true;
            //una copia para editar

          })
          .catch(error => {
            alert(error);
          })


    }
  }

</script>

<style scoped>

  h5 {
    margin-top: 10px
  }

  input {
    width: 250px
  }
</style>

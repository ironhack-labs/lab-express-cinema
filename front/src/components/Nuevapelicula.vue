<template>

    <div class="nuevapeli">

        <form method="post"
              v-on:submit.prevent="enviarDatos"
        >
            <label>Titulo</label>
            <input name="titulo"
                   v-model="titulo"
                   type="text" required/>

            <label>Foto</label>
            <input name="foto" type="text"
                   v-model="foto"
                   required/>

            <button>Enviar</button>

        </form>
    </div>


</template>

<script>

    export default {
        name: "Nuevapelicula",
        data() {
            return {
                titulo: "",
                foto: ""
            }
        },
        methods: {
            enviarDatos: function () {

                let model = {titulo: this.titulo, foto: this.foto};

                fetch('http://localhost:3000/movies/', {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        "Accept" : "application/json",
                        'Content-Type': "application/json"
                    },
                    body: JSON.stringify( model)
                })
                    .then((response) => {
                        return response.json();

                    }).then((json)=>{
                        alert(json.text);
                    }).catch(error => {

                        alert(error);
                    })
            }
        },
        mounted() {

            // fetch('http://localhost:3000/movies')
            //         .then((response)=>{
            //           return response.json()
            //         })
            //         .then((json) =>{
            //           this.peliculas =json;
            //         })
            //         .catch(error=>{
            //           alert(error);
            //         })


        }
    }

</script>

<style scoped>


</style>

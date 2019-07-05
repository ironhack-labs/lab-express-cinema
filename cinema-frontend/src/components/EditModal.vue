  
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <span class="modal-title">Edita la película</span>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body" class="modal-text">
              <form action method="post" class="form">
                <div class="item">
                  <label for="titulo">Ingresa el nuevo título de la película</label>
                  <input type="text" name="titulo" id="titulo" v-model="titulo" />
                </div>
                <div class="item">
                  <label for="foto">Ingresa la URL del póster de la película</label>
                  <input type="url" id="foto" name="foto" v-model="foto" />
                </div>
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn" @click="editData">Confirmar</button>
              <button class="btn" @click="$emit('close')">Cerrar</button>
            </slot>
          </div>

          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Next-player-modal",
  props: {
    item: Object
  },
  data () {
    return {
      titulo: this.item.title,
      foto: this.item.image
    }
  },
  methods: {
    editData() {
      fetch('http://localhost:3000/movies/' + this.item._id, {
        headers: {
          'Accept': "application/json",
          "Content-Type": "application/json"
        },
        method: 'PUT',
        body: JSON.stringify({titulo: this.titulo, foto: this.foto})
      })
      .then(data => {
        this.$emit("edited");
      }).catch(err => alert('Error, no se guardó la película', err))
    }
  }
};
</script>


<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: auto;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all 0.3s ease;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.btn {
  margin: 1rem;
  padding: 0.5rem 4rem;
  font-weight: bold;
  font-size: 1.2rem;
  color: #24305e;
  font-family: "Now";
  font-weight: 400;
  line-height: 1.7;
  border-radius: 1.1rem;
  border: 0.1rem #24305e solid;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in;
}
.btn:hover {
  border: 0.3rem #f76c6c solid;
  color: #f76c6c;
}
.btn:active {
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);
  background-color: #24305e;
  color: white;
  border: 0.3rem white solid;
}
.modal-title,
.modal-text {
  font-size: 3rem;
  color: white;
}

.modal-text {
  font-size: 2rem;
}

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
  font-size: 1.5rem;
  color: white;
}

input {
  height: 44px;
  border-radius: 11px;
  border-style: solid;
  font-size: 1.2em;
  padding: 10px;
}

button {
  padding: 10px;
  border-radius: 11px;
  font-size: 2em;
}
</style>

© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Octotree
Try Octotree Pro for free

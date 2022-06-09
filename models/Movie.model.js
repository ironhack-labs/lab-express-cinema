const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
    {
      //aqui va la estructura:
      title: {
        type: String,
        required: true,
      },
director:{
    type:String
},
stars:{
    type: Array
},

image: {
    type:String
},
description: {
    type:String
},
showtimes:{
    type: Array
} // si lo pusiera entre un array, es para indicar que le hay muchos owners.
},
    { timestamp: true }
  );
  
  //ultimo para exportar
  
  module.exports = model("MOVIE", movieSchema);
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('../bin/seeds.js');

const movieSchema = new Schema ({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movie = mongoose.model('Movie', movieSchema) // Creamos el modelo

mongoose.connect('mongodb://localhost/movieApp', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
})
  .then(() => {
    console.log('Connected to Mongo from AppJs!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


Movie.remove()
  .then(()=>{
    console.log("remove");

    Movie.insertMany(data)
    .then((result) => {
      console.log('Feeding MongoDB', result)
    })
    .catch((error) => {
      console.log('error', error)
    });  
  })
  .catch((error) => {
    console.log('error', error)
  }); 
  
  module.exports = Movie; 
    
  mongoose.connection.close();
    
// mongoose.connect('mongodb://localhost/movieApp')
//   .then(() => {
//     console.log('Connected to Mongo!');
//   }).catch(err => {
//     console.error('Error connecting to mongo', err);
// });
    

// mongoose.disconnect()
//   .then(() => {
//   console.log('Disconnected Mongo from Movie.js');
// })
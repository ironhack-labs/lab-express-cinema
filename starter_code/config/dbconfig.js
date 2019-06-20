const mongoose = require('mongoose');
const movieModel = require('../models/Movie.js'); // Import of the model Recipe from './models/Recipe'
const data = require('../bin/seeds.js');  // Import of the data from './bin/seed.js'


mongoose
  .connect('mongodb://localhost/movie-lab', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

//console.log(data)
//movieModel.insertMany(data)
  // .then( (res) =>{ res.forEach( r => console.log(r.title))})
  //.catch( (err) =>{console.log("An error occured during the insertion of many movies : ", err)})
  

// mongoose.connection.close()
  




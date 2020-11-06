const mongoose = require('mongoose');
const info= require ('../bin/seeds')
const Movie = require('../models/Movie.model');

mongoose
.connect('mongodb://localhost/express-cinema-dev', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(x =>{
  console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  return self.connection.dropDatabase();
})
.then(() => {
  Movie.insertMany(info)
  console.log('films were created')
  console.log(info)
})
.catch(error => console.log(error));

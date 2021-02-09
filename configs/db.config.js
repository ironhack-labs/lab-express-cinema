const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/MoviesDB', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));


  //al inicio estaba así el mongoose connect, pero no es el nombre de la base de datos.
  //mongoose
  //.connect('mongodb://localhost/express-cinema-dev', {
  //tambien intenté: MoviesDB.movies y MoviesDB


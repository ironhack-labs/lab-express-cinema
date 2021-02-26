const mongoose = require('mongoose');

/* mongoose
  .connect("mongodb://localhost/my-database")
  .then((x) => {
    console.log("Connection to the database successful");
  })
  .catch((error) => {
    console.log(error);
  }); */

 mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));

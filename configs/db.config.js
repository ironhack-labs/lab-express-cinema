const mongoose = require('mongoose');

const connect = mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return x;
  }
  )
  .catch(err => console.error('Error connecting to mongo', err));

 
module.exports = connect;
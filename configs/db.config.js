const mongoose = require('mongoose');

const DB_TITLE = 'express-cinema-dev';
const mongoUrl = `mongodb://localhost/${DB_TITLE}`
const mongoConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(mongoUrl, mongoConfig)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

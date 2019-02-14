

const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const username = process.env.MONGO_USERNAME || 'DevServer';
const password = process.env.MONGO_PASSWORD || 'BougieHaus1!';
const host = process.env.MONGO_HOST || 'ds251588.mlab.com'
const port = process.env.MONGO_PORT || 51588;
const dbName = process.env.MONGO_DBNAME || 'dev-bougie-haus';

const uri = `mongodb://${username}:${password}@${host}:${port}/${dbName}`;

mongoose
  .connect(uri, {useNewUrlParser: true})
  .then(async x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    console.log(await Movie.insertMany(require('./seeds').movies));
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


require('dotenv').config()

const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST;
const port = process.env.MONGO_PORT;
const dbName = process.env.MONGO_DBNAME;

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


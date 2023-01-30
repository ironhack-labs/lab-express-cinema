const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movies';

mongoose.connect(MONGODB_URI)
  .then(() => console.info(`Successfully connected to the data base ${MONGODB_URI}`))
  .catch((error) => console.log(`An error occurred trying to connect to ${MONGODB_URI}`));
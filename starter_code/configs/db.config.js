const mongoose = require('mongoose');
const DB_NAME = 'movies';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;


mongoose.connect(MONGO_URI)
.then(connected => {console.info(`Connected to the database ${MONGO_URI}`)})
.catch(error =>{console.error(`Error ${error}`)});

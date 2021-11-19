const {
  mongooseClose,
  mongooseConnect,
  mongooseDropCollection,
} = require("../db/index"); // db/index.js
const Movie = require("../models/Movie.model"); // Model
const moviesData = require("./movies.data"); // seeds/movies.data.js

async function seedMovies() {
  try {
    await mongooseConnect();
    await mongooseDropCollection();
    const movies = await Movie.insertMany(moviesData);
    console.log('movies', movies);
    await mongooseClose();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

seedMovies();

// Before
// // To insert in "seeds/movies.seed.js"
// const mongoose = require("mongoose");
// const Movie = require("../models/Movie.model");
// const movies = require("./movies.data"); // require the movies from --> movies.data.js

// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/express-cinema";

// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   //useFindAndModify: false,
//   //useCreateIndex: true
// }).then(self => {
//   console.log(`Connected to the database: "${self.connection.name}"`);
//   console.log('Deleting DB')
//   // Before adding any recipes to the database, let's remove all existing ones
//   return Movie.deleteMany();
// })
// .then( async() => {
//   try {
//     // const deleteMovies =  mongoose.connection.dropCollection('movies');
//     // console.log('Drop DB');
//     const addMovies = await Movie.create(movies);
//     console.log(`Created ${addMovies.length} movies`);
//     mongoose.connection.close();
//   } catch(error) {
//     console.error('There was an error', error);
//   }
// }).catch(err => console.log(`An error occurs while creating the database ${err}`));


// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)
// Create the Model

// Movie.create(movies)
//   .then(moviesFromDB => {
//     console.log(`Created ${moviesFromDB.length} movies`);
//     // Once created close the DB connection
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurs while creating the database ${err}`));
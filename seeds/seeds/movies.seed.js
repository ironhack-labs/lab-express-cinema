
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

mongoose.connect('mongodb://your-mongodb-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function seedDatabase() {
  try {
    await Movie.deleteMany(); 

    const seededMovies = await Movie.insertMany(movies);
    console.log(`Seeded ${seededMovies.length} movies into the database.`);
    
    mongoose.connection.close(); 
  } catch (error) {
    console.error('Error seeding the database:', error);
  }
}

seedDatabase();

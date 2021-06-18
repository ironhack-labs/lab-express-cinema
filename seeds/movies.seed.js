const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

require('../db/index');

// To insert in "seeds/movies.seed.js"



// Add here the script that will be run to actually seed the database (feel free to refer to the previous lesson)

// ... your code here

mongoose.connection.once('connected', () => {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            console.log('Database cleared');

            return Movie.insertMany(data)
        })
        .catch(e => console.error(e))
        .finally(() => {
            mongoose.connection.close()
                .then(() => console.log('Finish seeds.js'))
                .catch(e => console.error(e))
                .finally(() => {
                    process.exit(0)
                })
        })
})
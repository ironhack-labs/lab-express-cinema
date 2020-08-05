// const mongoose = require('mongoose');

// mongoose
//   .connect('mongodb://localhost/express-cinema-dev', {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(x =>
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   )
//   .catch(err => console.error('Error connecting to mongo', err));



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String },
    director: { type: String },
    stars: { type: [String] },
    image: { type: String },
    description: { type: String },
    showtimes: { type: [String] }
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie; 

  
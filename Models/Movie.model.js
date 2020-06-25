// title: 'The Leisure Seeker',
//       director: 'Paolo Virzì',
//       stars: ['Helen Mirren', 'Donald Sutherland', 'Janel Moloney'],
//       image:
//         'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1NTg2MzcyNF5BMl5BanBnXkFtZTgwNjMwMDIzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
//       description:
//         'A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.',
//       showtimes: ['13:40', '15:50', '19:00', '21:20', '23:50']




const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array


}, {
    timestamps: true
});

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie
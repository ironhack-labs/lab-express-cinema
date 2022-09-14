const mongoose = require('mongoose');

// {
//   title: 'Red Sparrow',
//   director: 'Francis Lawrence',
//   stars: ['Jennifer Lawrence', 'Joel Edgerton', 'Matthias Schoenaerts'],
//   image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg',
//   description:
//     "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
//   showtimes: ['13:00', '15:30', '18:00', '20:10', '22:40'],
// },

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  director: {
    type: String,
    required: true,
    unique: true,
  },
  stars: {
    type: [],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: {
    type: [],
  },
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = { Movie };

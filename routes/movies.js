const express = require('express')
const router = express.Router()

const Movie = require('../models/Movie.model.js')

const myMovies = [
  {
    title: 'Empire of the Sun',
    director: 'Steven Spielberg',
    stars: ['Christian Bale', 'John Malkovich', 'Miranda Richardson'],
    image:
      'https://m.media-amazon.com/images/M/MV5BMmQwNzczZDItNmI0OS00MjRmLTliYWItZWIyMjk1MTU4ZTQ4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description:
      "Based on J. G. Ballard's autobiographical novel, tells the story of a boy, James Graham, whose privileged life is upturned by the Japanese invasion of Shanghai, December 8, 1941. Separated from his parents, he is eventually captured, and taken to Soo Chow confinement camp, next to a captured Chinese airfield. Amidst the sickness and food shortages in the camp, Jim attempts to reconstruct his former life, all the while bringing spirit and dignity to those around him.",
    showtimes: ['13:50', '16:20', '19:20', '22:10']
  },
  {
    title: 'The Color Purple ',
    director: 'Steven Spielberg',
    stars: ['Danny Glover', 'Whoopi Goldberg', 'Oprah Winfrey'],
    image:
      'https://m.media-amazon.com/images/M/MV5BZDRkOWQ5NGUtYTVmOS00ZjNhLWEwODgtOGI2MmUxNTBkMjU0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    description:
      "This film follows the life of Celie, a young black girl growing up in the early 1900's. The first time we see Celie, she is 14 - and pregnant - by her father. We stay with her for the next 30 years of her tough life...",
    showtimes: ['13:50', '16:20', '19:20', '22:10']
  }
]

/* GET movies page */
router.get('/', (req, res, next) => {
  //Movie.deleteMany({ title: { $in: myMovies } })
  Movie.deleteMany({ director: 'Steven Spielberg' })
    .then(() => Movie.insertMany(myMovies))
    .then(() => Movie.find())
    .then((data) => {
      console.log('todas las películas de la base de datos', data)
      res.render('movies', data)
    })
    .catch((error) => console.log(error))
})

module.exports = router

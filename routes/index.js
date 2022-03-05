import express from 'express';
import { Movie } from '../models/Movie.model.js';


const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
  Movie.find()
.then(movies => res.render('movies', {movies: movies}))
})


router.get('/movies/:id', (req, res, next) => {
  Movie.find({ '_id': req.params.id })
  .then(movie => {
      res.render('movieDetails', { movie: movie[0], detail: true });
  })
})

export { router }

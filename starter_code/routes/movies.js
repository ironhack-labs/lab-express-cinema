const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/',(req, res, next) => {
  Movie.find()
  .then(movies => {
    res.render('movies', { movies } );
  })
  .catch(err => console.log('Error while rendering movies: ', err));
});
// ADD MOVIES
router.get('/create', (req, res) => {
  res.render('create')
  
});
// POST MOVIES 
router.post('/', (req, res, next) => {
	const { title, director, stars, image, description, showtimes } = req.body;
	Movie.create({
    title, 
    director,
    stars,
    image, 
    description,
    showtimes, 
	})
		.then(()=> {
			res.redirect('movies');
		})
		.catch(next);
});
// GET MOVIES ID
router.get('/:id',(req, res) =>{
const { id } = req.params;
Movie.findById(id)
.then(aMovie => {
  res.render('eachmovie', { aMovie });
})
.catch(err => console.log('Error while rendering movies: ', err));
});
//GET MOVIES EDIT
router.get('/:id/edit',(req, res) =>{
  const { id } = req.params;
  Movie.findById(id)
  .then(aMovie => {
    res.render('edit', { aMovie });
  })
  .catch(err => console.log('Error while rendering movies: ', err));
});
// POST MOVIES EDIT
router.post('/:id/edit', (req, res, next) => {
	const { id } = req.params;
	const { title, director, stars, image, description, showtimes } = req.body;
	Movie.findByIdAndUpdate(id, {
    title, 
    director,
    stars,
    image, 
    description,
    showtimes, 
	})
		.then(movieUpdated=> {
			res.redirect(`/movies/${id}`);
		})
		.catch(next);
});
// DELETE MOVIES
router.post('/:id/delete', (req, res, next) => {
	const { id } = req.params;

	Movie.findByIdAndDelete(id)
		.then(() => {
			res.redirect('/movies');
		})
		.catch(next);
});
module.exports = router;
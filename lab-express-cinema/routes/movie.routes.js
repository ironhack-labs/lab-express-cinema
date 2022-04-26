const router = require('express').Router();
const Movie = require('../models/Movie.model.js');

router.get('/movies/create', (req, res, next) => 
    res.render('movies/movie-create.hbs')
);
router.post('/movies/create', (req, res, next) => {
   // console.log(req.body);
   const { title, director, stars, description, showtimes} = req.body;

   Movie.create({ title, director, stars, description, showtimes})
   //.then(allTheMoviesFromDB => console.log(`New movie created: ${allTheMoviesFromDB.title}.`))
   .then(() => res.redirect('/books'))
   .catch(error => next(error));

});
//GET route to retrieve and display 

router.get('/movies', (req, res, next) => {
Movie.find()
.then(allTheMoviesFromDB => {
    console.log('Retrieved movies from DB:', allTheMoviesFromDB);



 res.render('movies/movies-list.hbs', {movies: allTheMoviesFromDB});

})
.catch(error => {
    console.log('Error while getting the books from the DB:', error);

    next(error);
});
});

router.get('/movies/:movieId', (req, res) => res.render('movies/movie-details.hbs'));

router.get('/movies/:movieId', (req, res) => {
    const {movieId} = req.params;
    console.log('The ID from the Url is:', movieId);

    res.render('movies/movie-details.hbs');
});


router.get('/movies/:movieId', (req, res, next) => {
    const { movieId } = req.params;
   
    Movie.findById(movieId)
      .then(theMovie => res.render('movies/movie-details.hbs', { movie: theMovie }))
      .catch(error => {
        console.log('Error while retrieving movie details: ', error);
   
        // Call the error-middleware to display the error page to the user
        next(error);
      });
  });

  


module.exports = router;
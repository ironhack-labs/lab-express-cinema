/*
Initial setup:
Require express, setup a router with express and finally require our movies model
from it's respective folder.
*/

const express = require('express');
const router  = express.Router();
const Movies = require('../models/Movies')

/*
Here we establish the methods of how we are going to get to render our respective
routes.

In the first get, we just respond to the get as a render of our main index view.

In the second get, we do an async/await because we are creating a constant of movies
that is going to get us all the information from the database, so we are
able to destructure the objects within and render them in the view.
And that's exactly what happens when we call the render, we say it renders movies
and passing the information that is within our movies constant destructured.

In the third get we get the movies route with the specific id attached to the
one that was selected by the user from the movies route.
So, since we are going to get data from the database, again we do an async/await.
Create a constant destructured from req.params called movieId so we can 
use the movieId and finally we create another constant called movie where we 
will use our await to find the movie that we are searching for by it's respective
id.
Finally we render the movieId specific view, passing the destructured movie
object so it can be used in the hbs.

*/

router
  .get('/', (req, res, next) => {
    res.render('index');
  })
  .get('/movies', async (req, res) => {
    const movies = await Movies.find()
    res.render('movies', { movies })
  })
  .get('/movie/:movieId', async (req, res) => {
    const { movieId } = req.params
    const movie = await Movies.find({ _id: movieId })
    res.render('movie', {movie})

  })

//Again, we export the router.
module.exports = router;

const router = require('express').Router();
const Movie = require('../models/Movie.model.js')
 
// GET route to retrieve and display all the books
router.get('/movies', (req, res) => res.render('books/books-list.hbs'));
 
module.exports = router;
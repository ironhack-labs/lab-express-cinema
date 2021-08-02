// routes/book.routes.js
 
const router = require('express').Router();
 
// GET route to retrieve and display all the books
router.get('/movies', (req, res) => res.render('books/books-list.hbs'));
 
module.exports = router;
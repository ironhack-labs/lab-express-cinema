const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));




router.get('/movies', (req, res, next) => res.render('movies'));



module.exports = router;

// app.get('/movies', (req, res) => {
//     res.render("movies.hbs");
// });


// app.get("/", (req, res) => {
//     res.render("home.hbs");
//   });
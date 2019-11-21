const express = require('express');
const router  = express.Router();
const movies = require('../models/Movie')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', async (req, res)=> {
  const muv = await movies.find()
  res.render('movies', muv)
})

router.get('movies', (req, res)=> {
  const {id} = req.params.id;
  movies.findById(id)
    .then(mubi => res.render("detail", mubi))
    .catch(err => res.render("detail", { err: "No existe" }));
})

module.exports = router;

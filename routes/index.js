const express = require('express');
const Movies = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/*movies*/ 
router.get('/movies', async (req,res,next)=>{
   const movies = await Movies.find();
   res.render('movies', {movies})
});

/*selectMovie*/ 
// router.get('/movies/:id', async (req,res,next)=>{
//     const selectMovie = await Movies.findById(req.params.id);
//     res.render ('seeMore', {selectMovie})
// })



module.exports = router;

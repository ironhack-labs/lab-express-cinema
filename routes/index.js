const express = require('express');
const router = express.Router();

//Importing the model 
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Get Movies
router.get('/movies', async (req, res, next)=>{
   try{
    const movies = await Movie.find()
    res.render('movies', { movies })
   }catch(err){
       console.log("Error: ", err)
   }
})

const createMovies = async () => {
    try {
      await Movie.create(movies)
  
      mongoose.connection.close()
    } catch (err) {
      console.log('ERROR: ', err)
    }
  }
  createMovies()


module.exports = router;

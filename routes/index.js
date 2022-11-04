const express = require('express');
const router = express.Router();
const data = require('../seeds/movies.seed')
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', async(req, res, next) =>{ 
try{
  res.render('index')
}catch(error){
  console.log(error.message)
}
})
router.get('/movies',async(req,res,next)=> {
try{
  //await Movie.insertMany(data)
  const movies = await Movie.find()
  res.render('movies',movies)
}catch(error){
    console.log(error.message)
}
});
router.get('/movies/:id',async(req,res,next)=>{
  const {id} = req.params
  try{
   const film = await Movie.findOne({_id:id})
   res.render('movies-details',film)
  }catch(error){
   console.log(error.message)
  }
})

module.exports = router;

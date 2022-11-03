const express = require('express');
const router = express.Router();
const data = require('../seeds/movies.seed')
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', async(req, res, next) =>{ 
try{
  await Movie.deleteMany()
  res.render('index')
}catch(error){
  console.log(error.message)
}
})
router.get('/movies',async(req,res,next)=> {
try{
  await Movie.insertMany(data)
  console.log("deu certo")
  res.render('movies',data)
}catch(error){
    console.log(error.message)
}
});

module.exports = router;

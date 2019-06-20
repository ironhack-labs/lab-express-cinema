const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/movies', (req, res)=>{

  movieModel.find({})
  .then(dbRes => {
    res.render("movies", {dbRes})
    dbRes.forEach( (m) =>{
      //console.log(m)
    })   
  })
  .catch(err=>
    res.render( console.log("there is an error : ", err)))
})


router.get('/movies/:id', (req, res) =>{
console.log("ici")
  
   movieModel.findById( req.params.id)
   .then( m => {
     console.log(m)
     res.render("movieDetails", {m}) 
   })
   .catch( err => console.log(err))
})

module.exports = router;


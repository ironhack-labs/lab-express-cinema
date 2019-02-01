const express = require('express');
const router  = express.Router();

const tobias = require('../models/Movies.js')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',(req,res)=>{
  tobias.find({}, (err,movies)=>{
    res.render('movies',{movies})
  })

})


router.get('/movie/:id',(req,res)=>{

  const id = req.params.id
 
console.log(id)

  tobias.findById(id)
  .then(data =>{
    
    res.render('movie',{data})
  })
 
   
    
  

})

module.exports = router;


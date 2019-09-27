const express = require('express');
const router  = express.Router();
const movies= require('../models/Movie')
/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');

});

router.get('/movies', (req, res, next) => {
movies.find()
.then(movieSelected=>{
  
  res.render('movies',{movieSelected});
})
 
});



module.exports = router;

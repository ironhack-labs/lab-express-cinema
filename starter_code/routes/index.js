const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/',(req,res) =>{

  res.render('movies')

})


module.exports = router;

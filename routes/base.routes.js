const express = require('express')
const router = express.Router()


// Endpoints
router.get('/', (req, res) => res.render('index.hbs'))


module.exports = router

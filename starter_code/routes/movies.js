const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinema.controller');

/* GET movies listing. */

router.get('/', cinemaController.list);
router.get('/:id', cinemaController.views);


module.exports = router;

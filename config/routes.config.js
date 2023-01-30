const express = require('express');
const router = express.Router();

const controllers = require('../controllers/common.controller');

router.get('/', controllers.home);





module.exports = router;
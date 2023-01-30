const express = require('express');

const router = express.Router();

const common = require('../controllers/common.controller');

router.get('/', common.home);

module.exports = router;
const express = require('express');
const router = express.Router();

const controllers = require("../controllers/router.controllers");

router.get("/", controllers.home);

router.get("/movies", controllers.list);

router.get("/movie/:id", controllers.single);

module.exports = router;

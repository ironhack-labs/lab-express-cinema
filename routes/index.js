// const express = require("express");
// const router = express.Router();
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

//export at the end
module.exports = router;

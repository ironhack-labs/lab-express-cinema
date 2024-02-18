const express = require("express");
const router = express.Router();
const controller = require("../controller");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", controller.list);
router.get("/movies/:id", controller.detail);

module.exports = router;

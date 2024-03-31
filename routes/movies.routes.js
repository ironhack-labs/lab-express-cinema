
const router = require("express").Router();

const Movies = require ("../seeds/movies.seed");



router.get("/movies", async (req, res, next) => {


  try {

    res.render ("movies", {Movies}); 
} catch (error) {
    console.error(error); 
    res.status(500).send("Something went wrong"); 
}

});

module.exports = router;
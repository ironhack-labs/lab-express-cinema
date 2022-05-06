const router = express.Router();

const Movie = require("../models/Movie.model");

router.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render("movies", { movies });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

//const Movie = require("models/Movie");

exports.home = async (req, res)=> {
    res.render("index");
}

exports.movies = async(req, res)=> {
    const movie = await (req.query.q).catch()
    res.render("movies", {items});
}

router.get("/movies", movies);
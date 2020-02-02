
const movieModel = require("./../models/Movie");



module.exports = function(router) {

  router.get("/movies", (req, res) => {
    movieModel
      .find() // retrieve al the documents in the artists collection
      .then(movies => {
        res.render("movies", {
          movies
        });
      })
      .catch(dbErr => {
        console.log("Oh No ! Database error", dbErr);
      });
  });
  router.get("/movies/:id", (req, res) => {
    movieModel
      .findById(req.params.id)
      .then(dbRes => {
        res.render("details", { movieDetails: dbRes });
      })
      .catch(dbErr => console.error(dbErr));
  });

}


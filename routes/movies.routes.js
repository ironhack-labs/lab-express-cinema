//iExpress and route import
const router = require("express").Router();
const Movie = require("../models/Movie.model");

// Get
router.get("/list", (req, res, next) => {
  //como solicitabanos documentos a mongoose find?
  //para aplicar el metodo de mongoose necesito el modelo osea tenemos que importar el modelo
  //Modelo.method() => Promise =>
  Movie.find()
    .then((movies) => {
      //find siempre va a regresar un []
      //dogs:[...dogs]
      res.render("movies", { movies }); //
    })
    .catch((error) => {
      console.log("Error", error);
      next();
    });
});
// localhost: 3000 / movies / list;

router.get("/:id", (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movies) => {
      res.render("movieDetail", { movies }); //
    })
    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

//Siempre hacer exportar
module.exports = router;

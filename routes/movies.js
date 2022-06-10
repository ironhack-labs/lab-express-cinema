// importamos express y router

const router = require("express").Router();
//ahora tengo todo Router, sus propiedades, métodos en router.
//todo lo que voy a hacer en mi documento, se exporta a través de la constante router.
const Movie = require("../models/Movie.model"); // tengo qe exportar mi modelo.

//get
//www.tinderperros.com/dog/list
//ah ya.. lo del app.js me manda un prefijo: .com/movies
router.get("/movies", (req, res, next) => {
  //para solicitar documentos en mongoose, utilizamos find
  //para aplocar el metodo de mongoose necesito el modelo, necesito importar el modelo.


  Movie.find()
    .then((movies) => {
        console.log(movies)
      //un find te envía un arreglo x lo qe necesitas {} para tener {[]}
      res.render("movies", { movies });
    })
    .catch((error) => {
      console.log("error", error);
      next(); //esto me enviará a la página de errores.
    });
});

router.get("/pelis/:id",(req,res,next)=>{


    Movie.findById(req.params.id)
    .then((data)=>
    {console.log(data)
        res.render("seeMore", data);
    })
    .catch((error) => {
        console.log("error", error);
        next(); //esto me enviará a la página de errores.
      });

})


//siempre exportamos:

module.exports = router;
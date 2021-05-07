const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    director: String,
    stars:[String],
    image: String,
    description: String,
    showtimes: [String]
});
// On crée un model de formatage de la donnée
// pour cela nous avons besoin de mongoose et sa methode Schema

// on crée une constante qui execute le model qu'on a crée et l'applique à "movies"(the collection name)
const MovieModel = mongoose.model("movies", movieSchema);

// on rend ce resultat disponible pour les autres éléments du code
module.exports = MovieModel;
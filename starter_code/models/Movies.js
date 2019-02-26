//Mandatory

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


//check in mongo shell => use recipeApp => db.recipes.find()
const cinemaSchema = new Schema ({
  //create new Schema 
  //required true, unique true (set value unique)

  title :       String,
  director:     String,
  stars:        Array,
  image:        String,
  description:  String,
  showtimes:    Array,
  

});
  
//Asign database model to Recipe
const Cinema = mongoose.model('Cinema', cinemaSchema);
// //export 
module.exports=Cinema;
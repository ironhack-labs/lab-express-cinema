
// title : "The Hurricane Heist",
// director: "Rob Cohen",
// stars: ["Toby Kebbell", "Maggie Grace", "Ryan Kwanten"],
// image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzg3Y2MyNjgtMzk4ZS00OTU3LWEwZmMtN2Y0NTdlZjU0NGFiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
// description: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.",
// showtimes: ["13:10", "15:40", "18:20", "20:50", "23:10"]


const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema(
    {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array 
  }
  );

const Model = mongoose.model("Movies", schemaName);
module.exports = Model;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
    title: { type: String, unique:true},
    director: { type: String},
    stars: {type: [String]},
    image: {type: String}, 
    description: {type: String},
    showtimes: {type: [String]},
  },
 /*  {
      timestamps:{
          createdAt: "created_at",
          updatedAt: "updated_at"
      }
  } */);


const Cinema = mongoose.model("Cinema", cinemaSchema);

module.exports = Cinema;
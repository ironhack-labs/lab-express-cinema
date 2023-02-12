require("../db");

const MovieModel = require("../models/Movie.model.js");
const moviesArr = require("./movies.json");

async function insertData() {
  try {
    const response = await MovieModel.insertMany(moviesArr);
    console.log("All good, films added to the DB");
  } catch (err) {
    console.log(err);
  }
}

insertData();

const { Schema, model} = require("mongoose")

const movieSchema = Schema({
  title:{
		type: String,
	} ,
  director:{
		type: String
	} ,
  stars:[
		{
			type:String
		}
	],
  image:{
		type: String
	},
  description:{
		type: String
	},
  showtimes: [
		{
			type: String
		}
	]
})

const MovieModel = model("movie", movieSchema)

module.exports = MovieModel;
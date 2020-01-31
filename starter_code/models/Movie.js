
const { model, Schema } = require('mongoose')
/*Destructurando mongopara usarlo sin usar mongoose....*/
const movieSchema = new Schema(
{  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes:Array
},
{
  timestamp:true
}
)

module.exports =  model("Movie", movieSchema);




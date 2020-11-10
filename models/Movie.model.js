const mongoose = require('mongoose'); //este ficheiro é para conectar ao mongoose
const {Schema, model} = mongoose;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showTimes: Array, 
},
{
  timestamps: true //utilizamos timestamp para aparecer no compass as linhas createdAt e updatedAt
}
)

module.exports = model('Movie', movieSchema);
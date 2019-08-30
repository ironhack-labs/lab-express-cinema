const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
  title : String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

const MovieModel = mongoose.model("Movie", movieSchema);

module.exports = MovieModel;

// var promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('foo');
//   }, 300);
// });

// p.then((value) => console.log("fulfilled:", value))  
//  .catch((err) => console.log("rejected:", err));

// const promise = new Promise(function(resolve, reject) {  
//   if (/* condition */) {
//      resolve(/* value */);  // fulfilled successfully
//   }
//   else {
//      reject(/* reason */);  // error, rejected
//   }
// });
// console.log(promise);
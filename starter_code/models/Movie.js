const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showTimes: Array,
},{
  timestamps:{
    createAt: "create_at",
    updateAt: "update_at",
  },

  versionKey: false
})

module.exports = mongoose.model("Movie", movieSchema)









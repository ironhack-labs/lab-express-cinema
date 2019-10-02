const mongoose = require("mongoose")

const Picture = mongoose.model("pictures", {
  path: String,
  title: String,
})
const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    title: {
      type: 'String' },
    director: 'String',
    stars: 'Array',
    image: 'String',
    description: 'String',
    showtimes: 'Array'
  }
);

module.exports = mongoose.model("Movie", schema);
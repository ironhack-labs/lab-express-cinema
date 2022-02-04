require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

const express = require("express");

const hbs = require("hbs");
const app = express();

require("./config")(app);

// default value for title local
const projectName = "lab-express-cinema";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${projectName}`;

const index = require("./routes/index");
app.use("/", index);

require("./error-handling")(app);

module.exports = app;

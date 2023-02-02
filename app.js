require("dotenv/config");

//express
const express = require("express");
const logger = require("morgan");

const app = express();

require("./config/db.config");

//morgan

app.use(logger("dev"));

//Configure hbs as view engine

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);
app.use(express.static(__dirname + "/public"));

const router = require("./config/routes.config");
app.use("/", router);

const port = 3000;
app.listen(port, () => console.log(`Application running in port ${port}`));

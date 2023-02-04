require('dotenv').config();

const express = require('express');
const app = express();

require("./configs/db.config");

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(express.static('public'));

const router = require("./configs/routes.config");
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening at port ${port}`));

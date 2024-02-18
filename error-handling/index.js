const mongoose = require("mongoose");
const createError = require("http-errors");

module.exports = (app) => {
  app.use((req, res, next) => {
    // this middleware runs whenever requested page is not available
    res.status(404).render("not-found");
  });

  app.use((err, req, res, next) => {
    // whenever you call next(err), this middleware will handle the error
    // always logs the error
    if (
      err instanceof mongoose.Error.CastError &&
      err.message.includes("_id")
    ) {
      res.status(400).render("not-found");
    } else if (!res.headersSent) {
      res.status(500).render("error");
    }
    console.error("ERROR", req.method, req.path, err);
  });
};

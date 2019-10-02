const express = require("express");
const app = express();
const Picture = require("../models/picture");
var multer = require("multer")
var upload = multer({ dest: `${__dirname}/../uploads` })

app.get("/upload-file", (req, res) => {
  res.render("upload-picture")
})

app.post("/upload-file", upload.single("profile-picture"), function (req, res) {
  Picture.create({title: req.body.title, path: req.file.filename})
    .then(() => {
      res.send("uploaded")
    })
    .catch((err) => {
      res.send("err", err)
    })
})

app.get("/all-pictures", (req, res) => {
  Picture.find()
    .then((pictures) => {
      res.render("pictures", {pictures})
    })
    .catch((err) => {
      res.send("ERROR", err)
    })
})

module.exports = app
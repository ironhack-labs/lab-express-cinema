const express = require('express');
const router  = express.Router();
const Director = require("../models/directors");

router.get("/adddirector", (req,res,next)=>{
    res.render("new-director");
})

router.post("/adddirector", (req,res,next)=>{
    var newDirector = new Director({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        nationality: req.body.nationality,
    })

    newDirector.save()
    .then(()=>{
        console.log(`saved!`)
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;
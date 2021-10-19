const fs=require("fs")
const express = require("express");
const router = express.Router();

router.get("/index.html", (req, res) => {
    res.render("index.html");
  });

  module.exports=router
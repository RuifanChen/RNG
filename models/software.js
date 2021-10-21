const mongoose = require("mongoose");

var softwareSchema = new mongoose.Schema({
    name: String,
    img1: String,
    img2: String,
    img3: String,
    title1: String,
    title2: String,
    txt1: String,
    txt2: String,
    txt3: String,
})
var Software = new mongoose.model("Software", softwareSchema);

module.exports = Software;
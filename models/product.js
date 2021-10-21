const mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
    name: String,
    img1: String,
    img2: String,
    img3: String,
    title1: String,
    title2: String,
    txt1: String,
    txt2: String,
    txt3: String,
    txt4: String,
    txt5: String,
    txt6: String,
    txt7: String,
    txt8: String,
    txt9: String,
})
var Product = new mongoose.model("Product", productSchema);

module.exports = Product;
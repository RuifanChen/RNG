const { data } = require("jquery");
const mongoose=require("mongoose");
var newsScheme=new mongoose.Schema({
    name:{
        type: String,
    },
    avatar:{
        type:String,
    },
    data:{
        type: String,
        
    },
    html:{
        type:String,
    }
})

var News=mongoose.model("News",newsScheme);
module.exports=News;
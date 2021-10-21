var express = require('express')
var News=require("../models/news")
var router = express.Router()

router.get('/', function (req, res) {
    res.render('index.html')
})



router.get('x', function (req, res) {
    res.render('callus.html')
})

router.get('/news.html',async(req,res)=> {
 
    var result=await News.find();

    res.render('news.html',{result})
})

router.get("/news.html/:id",async(req,res)=>{
    
    var id=req.params['id'];
    var result=await News.findById(id);

    res.render("news1.html",{result})
  })

router.post('/register', function (req, res, next) {
    console.log("xxxx");
})


router.get("/page.html",(req,res)=>{
    res.render("jiesao.html")
})

router.get("/ggzsry.html",(req,res)=>{
    res.render("rongyu.html")
})

router.get("/gghzhb.html",(req,res)=>{
    res.render("hezuo.html")
})
module.exports = router;

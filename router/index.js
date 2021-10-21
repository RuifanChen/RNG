var express = require('express')
const Product = require("../models/product");
const Software = require("../models/software");
var News = require("../models/news")
var router = express.Router()

router.get('/index.html', function(req, res) {
    res.render('Index.html')
})
router.get('/product.html', async(req, res) => {
    var result = await Product.find();
    var result2 = await Software.find();
    res.render('product.html', { result, result2 })
})

router.get("/product.html/:id", async(req, res) => {
    var id = req.params["id"];
    var result = await Product.findById(id);
    res.render("Product1.html", { result });
});

router.get("/product1.html/:id", async(req, res) => {
    var id = req.params["id"];
    var result2 = await Software.findById(id);
    res.render("Product2.html", { result2 });
});




router.get('/news.html', async(req, res) => {

    var result = await News.find();

    res.render('news.html', { result })
})

router.get("/news.html/:id", async(req, res) => {

    var id = req.params['id'];
    var result = await News.findById(id);

    res.render("news1.html", { result })
})
router.get("/page.html", (req, res) => {
    res.render("jiesao.html")
})
router.get("/ggzsry.html", (req, res) => {
    res.render("rongyu.html")
})
router.get("/gghzhb.html", (req, res) => {
    res.render("hezuo.html")
})


router.get('/callus.html', function(req, res) {
    res.render('callus.html')
})



router.get('/ggfuwu_yuzhi.html', (req, res) => {
    res.render("ggfuwu_yuzhi.html")
})


router.get('/ggziliao_xiazai.html', function(req, res, next) {
    res.render('ggziliao_xiazai.html')
})

router.get('/ggjishu_zhici.html', function(req, res, next) {
    res.render('ggjishu_zhici.html')
})


module.exports = router

const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.html")
})


router.get("/service_support.html", (req, res) => {
    res.render("service_support.html")
})


router.get('/ggziliao_xiazai.html', function (req, res, next) {
    res.render('ggziliao_xiazai.html')
})

router.get('/ggjishu_zhici.html', function (req, res, next) {
    res.render('ggjishu_zhici.html')
})
module.exports = router;
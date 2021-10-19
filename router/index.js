var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
    res.render('index.html')
})

router.get('/callus', function (req, res) {
    res.render('callus.html')
})

router.get('/news', function (req, res, next) {
    res.render('news.html')
})

router.post('/register', function (req, res, next) {
    console.log("xxxx");
})

module.exports = router
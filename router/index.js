var express = require('express')

var router = express.Router()

router.get('/', function (req, res) {
    res.render('index.html')
})

router.get('/callus.html', function (req, res) {
    res.render('callus.html')
})

router.get('/news.html', function (req, res) {
    res.render('news.html')
})



module.exports = router

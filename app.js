const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");
//const expressSession = require("express-session");
const app = express();

mongoose.connect("mongodb://localhost:27017/blog");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("连接成功");
});

// app.use(
//     expressSession({
//         name: "sessionID",
//         secret: "secret",
//         resave: false,
//         rolling: true,
//         saveUninitialized: false,
//         cookie: {
//             maxAge: 1000 * 60 * 3,
//         },
//     })
// );

app.use("/node_modules", express.static("./node_modules"));
app.use("/public", express.static("./public"));

app.engine("html", require("express-art-template"));
app.set("views", __dirname + "/views");

//解析请求头为"application/x-www-form-urlencoded"的post请求参数
app.use(bodyParser.urlencoded({ extended: false }));
//解析请求头为 "application/json"的post请求参数
app.use(bodyParser.json());

//挂载路由
app.use("/", router);

//404处理
app.get("*", (req, res) => {
    res.render("404.html");
});

//错误处理中间件
app.use(function(err, req, res, next) {
    res.render("err.html", { err: err.message });
});

app.listen(8000, () => {
    console.log("8000端口已启用");
});
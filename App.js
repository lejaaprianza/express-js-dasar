var express = require("express")
var app = express()

app.get("/user/:id", function (req, res, next) {
  res.send("method GET Lampung Kode")
})

app.get("/user/:id", function (req, res, next) {
  res.send("method GET yang kedua Lampung Kode")
})

app.post("/user/:id", function (req, res, next) {
  res.send("method POST Lampung Kode")
})

app.listen(4000)

var express = require("express")
var app = express()

app.get("/hello", function (req, res) {
  res.send("Lampung Kode")
})

app.post("/hello", function (req, res) {
  res.send("Selamat datang di lampung kode!")
})

app.all("/test", function (req, res) {
  res.send("method post dan method get bisa dilakukan pada route ini")
})

app.listen(4000)

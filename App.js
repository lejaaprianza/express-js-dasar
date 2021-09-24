var express = require("express")
var app = express()

app.use(function (req, res, next) {
  console.log("Waktu LampungKode: " + Date.now())
  next()
})

app.listen(4000)

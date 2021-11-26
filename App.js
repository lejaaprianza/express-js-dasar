var express = require("express")
var app = express()

app.get("/", function (req, res) {
  next(err)
})

app.post("/", function (req, res) {
  res.send("tes")
})

app.use(function (err, req, res, next) {
  res.status(500)
  res.send("Wah, ada yang error...")
})
app.listen(4000)

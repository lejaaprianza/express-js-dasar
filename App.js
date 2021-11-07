var express = require("express")
var app = express()

app.use("/user/:id", function (req, res, next) {
  res.send(req.method)
  next()
})

app.listen(4000)

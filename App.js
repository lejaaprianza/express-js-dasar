var express = require("express")
var app = express()

function logMethod(req, res) {
  res.send("Tipe Request-nya: " + req.method)
}

app.get("/user/:id", logMethod)
app.post("/user/:id", logMethod)

app.listen(4000)

var express = require("express")
var app = express()

app.get("/kodepos/:kode([0-9]{5})", function (req, res) {
  res.send("Kode Pos: " + req.params.kode)
})

app.listen(4000)

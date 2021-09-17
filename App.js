var express = require("express")
var app = express()

app.get("/:id", function (req, res) {
  res.send("ID kamu adalah " + req.params.id)
})

app.get("/lampung/:nama/:id", function (req, res) {
  res.send("id: " + req.params.id + " dan nama: " + req.params.nama)
})

app.listen(4000)

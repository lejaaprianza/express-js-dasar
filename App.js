var express = require("express")
var app = express()

app.get("/lampungkode", function (req, res) {
  res.send("method GET dapat diakses")
})

app.get("*", function (req, res) {
  res.send("maaf, method GET belum dibuat atau tidak dapat diakses.")
})

app.listen(4000)

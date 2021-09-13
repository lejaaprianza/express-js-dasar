var express = require("Express")
var app = express()

var lampungKode = require("./lampungKode.js")

app.use("/lampungkode", lampungKode)

app.listen(4000)

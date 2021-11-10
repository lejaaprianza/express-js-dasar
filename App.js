var express = require("express")
var app = express()

app.get(
  "/user/:id",
  function (req, res, next) {
    if (req.params.id === "0") next("route")
    else next()
  },
  function (req, res, next) {
    res.send("Halaman ini muncul kalau params tidak sama dengan 0")
  }
)

app.get("/user/:id", function (req, res, next) {
  res.send("Params sama dengan 0")
})
app.listen(4000)

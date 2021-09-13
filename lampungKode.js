var express = require("express")
var router = express.Router()

router.get("/", function (req, res) {
  res.send("Ini method GET ketika routing ke /lampungkode")
})
router.post("/", function (req, res) {
  res.send("Ini method POST ketika routing ke /lampungkode")
})

module.exports = router

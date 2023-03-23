var express = require("express"),
  router = express.Router(),
  {
    saveAccValues,
  } = require("../controllers/accValues.js");

router.post('/accValues/:xValue/:yValue/:zValue', saveAccValues,function (req,res){});
  
module.exports = router;
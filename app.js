var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  accValues = require("./routes/accValues");

mongoose.set('strictQuery',true);

mongoose.connect("mongodb://localhost/MyNewDatabase")
    .then(()=>console.log("connected to database"))
    .catch((error)=>console.error("Error:",error));

app.use(accValues);
app.listen(3000, '0.0.0.0');
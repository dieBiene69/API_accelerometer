var mongoose = require('mongoose');

const accValuesSchema = mongoose.Schema({
    xValue:{type:Number, required:true},
    yValue:{type:Number, required:true},
    zValue:{type:Number, required:true},
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model("AccValues", accValuesSchema);

const accValues = require("../models/accValues");

exports.saveAccValues = async (req, res) => {
    try {
        const accValuesInstance = new accValues({
            xValue: req.params.xValue,
            yValue: req.params.yValue,
            zValue: req.params.zValue
        })
        const saveResult = await accValuesInstance.save()
        res.status(201).json(saveResult)
    } catch(error) {
        res.status(500).json(error)
    }
}
const { Schema, model } = require("mongoose")

const emplyeeSchema = new Schema({
    firstName: String,
    lastName: String,
    salary: String,
    department: String,
    lastCompany: String,
    lastSalary: String,
    overallExp: String,
    contactInfo: String,
    yearGrad: String,
    gradStream: String
})

module.exports = model("employee", emplyeeSchema)
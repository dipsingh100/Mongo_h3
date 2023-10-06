const Employee = require("../models/employeeModel")

const populateDB = async (req, res) => {
    const employeeData = [
        {
            firstName: "John",
            lastName: "Doe",
            salary: "25000",
            department: "HR",
            lastCompany: "X",
            lastSalary: "10000",
            overallExp: "2",
            contactInfo: "1234567890",
            yearGrad: "2016",
            gradStream: "CSE"
        },
        {
            firstName: "Rohan",
            lastName: "Jame",
            salary: "30000",
            department: "Technical",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "1",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
        },
        {
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "20000",
            overallExp: "1",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "ECE"
        },
        {
            firstName: "Sao",
            lastName: "Avika",
            salary: "30000",
            department: "Sales",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
        },
        {
            firstName: "Jame",
            lastName: "roh",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "EEE"
        },
        {
            firstName: "Rohan",
            lastName: "Jame",
            salary: "30000",
            department: "Technical",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "1",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
        },
        {
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "20000",
            overallExp: "1",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "ECE"
        },
        {
            firstName: "Sao",
            lastName: "Avika",
            salary: "30000",
            department: "Sales",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
        },
        {
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "EEE"
        },
        {
            firstName: "Rohan",
            lastName: "Jame",
            salary: "30000",
            department: "Technical",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "1",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
        },
        {
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "20000",
            overallExp: "1",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "ECE"
        },
        {
            firstName: "Sao",
            lastName: "Avika",
            salary: "30000",
            department: "Sales",
            lastCompany: "Y",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "1234567860",
            yearGrad: "2015",
            gradStream: "CSE"
        },
        {
            firstName: "Jame",
            lastName: "Doe",
            salary: "35000",
            department: "Accounts",
            lastCompany: "Z",
            lastSalary: "15000",
            overallExp: "2",
            contactInfo: "123567890",
            yearGrad: "2019",
            gradStream: "EEE"
        }
    ]
    try {
        const data = await Employee.create(employeeData)
        console.log(`${data.insertedCount} employee records inserted`)
        res.status(201).json({
            success: true,
            data
        })
    }
    catch (error) {
        console.log("Error while inserting data", error);
        res.status(400).json({
            success: false,
            error
        })
    }
}

const getAllEmployee = async (req, res) => {
    try {
        const data = await Employee.find()
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const salaryAboveThirtyThousand = async (req, res) => {
    try {
        const data = await Employee.find({ "salary": { $gt: "30000" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const experienceAboveTwoYears = async (req, res) => {
    try {
        const data = await Employee.find({ "overallExp": { $gt: "2" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const gradAfterFifteenExpAboveOneYear = async (req, res) => {
    try {
        const data = await Employee.find({ "overallExp": { $gt: "1" }, "yearGrad": { $gt: "2015" } })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const updateSalary = async (req, res) => {
    try {
        const data = await Employee.findOneAndUpdate({ "salary": "70000" }, { $set: { "salary": "65000" } }, { new: true })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

const deleteEmp = async (req, res) => {
    try {
        const data = await Employee.findOneAndDelete({ "lastCompany": "Y" })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })
    }
}

module.exports = { populateDB, getAllEmployee, salaryAboveThirtyThousand, experienceAboveTwoYears, gradAfterFifteenExpAboveOneYear, updateSalary, deleteEmp }
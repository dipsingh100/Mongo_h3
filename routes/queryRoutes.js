const { getAllEmployee, populateDB, salaryAboveThirtyThousand, experienceAboveTwoYears, gradAfterFifteenExpAboveOneYear, deleteEmp, updateSalary } = require("../controllers/queryController")

const router = require("express").Router()

//Create a database , give it name like ""Human_Resource"". Create a collection inside this named ""employee""
router.post('/query1', populateDB)

//Query the collection ""employee"" and list all the documents
router.get('/query2', getAllEmployee)

//Query the collection ""employee"" and list the employees who are having salary more than 30000
router.get('/query3', salaryAboveThirtyThousand)

//Query the collection ""employee"" and list the employees who are having experience more than 2 years.
router.get('/query4', experienceAboveTwoYears)


//Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year
router.get('/query5', gradAfterFifteenExpAboveOneYear)


//Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000
router.get('/query6', updateSalary)


//Delete all the documents from ""employee"" where last company is Y"
router.get('/query7', deleteEmp)


module.exports = router
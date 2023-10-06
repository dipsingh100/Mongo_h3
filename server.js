const express = require('express')
require("dotenv").config()

const connectDB = require("./config/database")
const router = require("./routes/queryRoutes")

const app = express()
const port = process.env.PORT || 8000

const startConnection = async () => {
    try {
        await connectDB()
        app.listen(port, () => console.log(`server is listening on port ${port}!`))
    } catch (err) {
        console.log(err)
    }
}

startConnection()

app.use('/api', router)
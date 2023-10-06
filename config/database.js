const mongoose = require("mongoose")

const connectDB = () => {
    return mongoose.connect(process.env.DB_URL)
        .then(() => console.log("connected to database"))
        .catch(err => console.log(err))
}

module.exports = connectDB
const mongoose = require('mongoose');
const { DB_NAME } = require("../constant.js");
require('dotenv').config();

console.log(DB_NAME);
console.log(process.env.MONGODB_URI);

const connectDB = async() => {
     try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://aditya:123@cluster.zcqmic8.mongodb.net/crud`)
        console.log(`MongoDB connect sucessfully !! DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connect failed !! `,error);
        process.exit(1)
    }
}

module.exports = connectDB;
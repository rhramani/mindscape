const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Mongoose Connected: ${conn.connection.host} 🍃`);
  } catch (error) {
    console.error(`Mongoose connection error: ${error.message} ❌`);
    // Removed process.exit(1) to allow debugging while server is "up"
  }
};

module.exports = connectDB;

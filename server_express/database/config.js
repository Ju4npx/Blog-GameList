const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database connection established successfully!");
  } catch (error) {
    throw new Error("Database error");
  }
};

module.exports = {
  dbConnection,
};

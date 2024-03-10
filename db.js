import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected ...");
  } catch (error) {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected ...");
  }
};

export default connectDB;

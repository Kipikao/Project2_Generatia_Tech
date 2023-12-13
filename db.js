import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config();
const dbURI = async () => {
  await mongoose.connect(process.env.MONGOURI).catch((err) => console.log(err));
};

export default dbURI;

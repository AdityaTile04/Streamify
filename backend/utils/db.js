import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

connection()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(`Error in database ${err}`);
  });

export default connection;

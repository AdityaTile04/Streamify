import express from "express";
import dotenv from "dotenv";
import connection from "./utils/db.js";
dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connection();
});

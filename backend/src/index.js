import express from "express";
import dotenv from "dotenv";
import connection from "./utils/db.js";
import { connectToSocket } from "./utils/Socket.js";
dotenv.config();
const PORT = process.env.PORT || 3001;
import cors from "cors";

import { createServer } from "node:http";

import userRoutes from "./routes/user.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connection();
});

import express from "express";
import { login, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/add_to_activity");
router.get("/get_all_activity");

export default router;

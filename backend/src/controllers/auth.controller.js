import bcrypt from "bcrypt";
import { createSecretToken } from "../utils/createSecretToken.js";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exits" });
    }
    const user = await User.create({ username, email, password });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User signed in succesfully" });
  } catch (err) {
    console.log(err);
  }
};

export const login = (req, res) => {
  res.json({ message: "login route" });
};

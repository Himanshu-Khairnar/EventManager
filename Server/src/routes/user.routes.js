import express from "express";
import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    const authOption = {
      httpOnly: true,
      secure: true,
    };
    console.log(token);
    res.cookie(token,authOption).json({ token ,userId:user._id,userName:user.username,userEmail:user.email});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

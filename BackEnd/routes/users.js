const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModels'); // Import user model
const router = express.Router();

// User Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phno, password } = req.body;

    // Check if user already exists
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    let user = new userModel({
      name,
      email,
      phno,
      password: hashedPassword,
      isVerified: true // Assuming immediate verification for now
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // if (!user.isVerified) {
    //   return res.status(403).json({ message: "User not verified" });
    // }

    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    // Generate JWT Token
    const token = jwt.sign({ id: user._id, email: user.email }, "secret_key", { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      username: user.name
    });

  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

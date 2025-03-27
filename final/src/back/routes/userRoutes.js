const express = require("express");
const User = require("../models/User");  // ✅ Ensure correct path

const router = express.Router();

// ✅ Create User (Signup)
router.post("/signup", async (req, res) => {  // ✅ Should be POST, not GET
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User Created Successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

module.exports = router;

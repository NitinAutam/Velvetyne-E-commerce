const User = require("../models/userModel");
const { createSecretToken } = require("../util/secretToken");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const user = await User.create({ name, email, password });
    const token = createSecretToken(user._id);

    res.cookie("Token", token, {
      httpOnly: true,
      secure: false, // set true in production
      sameSite: "Lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    
    return res.status(201).json({
      success: true,
      message: "User created",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
 
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ success: false, message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("Token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

const logoutUser = (req, res) => {
  res.clearCookie("Token", { httpOnly: true, secure: false });
  return res.status(200).json({ success: true, message: "Logged out successfully" });
};

module.exports = { logoutUser, loginUser, signUp };

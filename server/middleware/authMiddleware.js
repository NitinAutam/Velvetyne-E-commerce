const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  const token = req.body.token;

  // No token provided
  if (!token) {
    return res.status(401).json({ status: false, message: "Token not provided" });
  }

  // Verify token
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      console.error("JWT Verification Error:", err.message);
      return res.status(403).json({ status: false, message: "Invalid token" });
    }

    try {
      const user = await User.findById(data.id);
      if (user) {
        return res.status(200).json({ status: true, user: user.username });
      } else {
        return res.status(404).json({ status: false, message: "User not found" });
      }
    } catch (dbError) {
      console.error("DB Error:", dbError.message);
      return res.status(500).json({ status: false, message: "Server error" });
    }
  });
};

const User = require("../models/userModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  // console.log("Cookies received:", req.cookies);
  const token = req.cookies.Token; // FIX: read from cookie, not body

  if (!token) {
    return res.status(401).json({ status: false, message: "Token not provided" });
  }
  try {
    const data = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(data.id);
    
    if (user) {
      return res.status(200).json({ status: true, user: user.username, loggedIn: true });
    } else {
      return res.status(404).json({ status: false, message: "User not found", loggedIn: false });
    }
  } catch (err) {
    console.error("Verification error:", err.message);
    return res.status(403).json({ status: false, message: "Invalid token", loggedIn: false });
  }
};

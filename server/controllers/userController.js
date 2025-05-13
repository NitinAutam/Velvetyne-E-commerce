const User = require("../models/userModel");
const { createSecretToken } = require("../util/secretToken"); // Use destructuring to get the function
const bcrypt = require("bcryptjs");

module.exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingId = await User.findOne({ email });
    if (existingId) {
      res.json({ message: "User already exists" });
    }
    const user = await User.create({ name, email, password });
    const token = createSecretToken(user._id);
    // When a user logins , these cookie saved gets send automatically to cross check JWT everytime a user switch sessions
    res.cookie("Token", token, {
      httpOnly: true, // Cannot be accessed via JS → prevents XSS
      secure: true, //  Only sent over HTTPS
      sameSite: "Lax", //  Prevents CSRF on normal navigation
    });
    res.status(201).json({ message: "User created", user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("Token", token, {
      httpOnly: true, //  Cannot be accessed via JS → prevents XSS
      secure: true, //  Only sent over HTTPS
      sameSite: "Lax", //  Prevents CSRF on normal navigation
    });
    res.json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
};

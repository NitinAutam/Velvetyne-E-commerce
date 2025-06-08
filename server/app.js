const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/authRoute");
const productsRoute = require("./routes/productsRoute");
require("dotenv").config();
const connectDB = require("./config/db"); // Import connectDB

connectDB();
const app = express();

// Middlewares
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);

module.exports = app;

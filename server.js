require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Health Check Endpoint
app.get("/health", (req, res) => {
    res.status(200).send("Healthy");
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { ssl: true, retryWrites: false })
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Example Route
app.get("/", (req, res) => {
    res.send("Backend is Running Successfully!");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

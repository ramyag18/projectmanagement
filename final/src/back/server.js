const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}

// Initialize Express App
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Configure CORS to allow requests from frontend
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Ensure this is correct
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed:", err);
    process.exit(1);
  });

// ✅ Import Routes
const authRoutes = require("./routes/authRoutes");  // User authentication routes

// ✅ Register Routes
app.use("/api/auth", authRoutes);  // Ensure the correct base route

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "🚀 Server is Running!" });
});

// ✅ Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

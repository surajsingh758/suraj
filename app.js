// server.js
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (like CSS, images, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML page for the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API endpoint to get some dynamic data
app.get("/api/data", (req, res) => {
  const data = {
    message: "Welcome to Telgrid API!",
    services: ["grow your business", "connect with people", "build amazing projects"],
  };
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");
require("dotenv").config();
const connectDB = require("./lib/db");

const app = express();

// Initialize Mongoose Connection
connectDB();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true, limit: "5mb" }));

// Static Folders
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/public", express.static(path.join(__dirname, "public")));

// Routes
const allRoutes = require("./src/routes/allRoutes");
app.use("/api", allRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Mindscape Backend API is running...");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Something went wrong!" });
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT} 🤖`);
});

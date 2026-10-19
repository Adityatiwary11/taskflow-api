require("dotenv").config();
const express = require("express");

const logger = require("./middleware/logger");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandlers");
const authRoutes = require("./routes/authRoutes");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Auth Routes
app.use("/api/auth", authRoutes);

// Task Routes
app.use("/tasks", taskRoutes);

app.get("/test-error", (req, res, next) => {
    const error = new Error("This is a test error");

    next(error);
});

// Error Handler
app.use(errorHandler);

// Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
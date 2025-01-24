const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // For handling cross-origin requests
require("dotenv").config(); // To manage environment variables

const resultRoutes = require("./server/routes/result.routes");
const studentRoutes = require("./server/routes/student.routes");
const authRoutes = require("./server/routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.use("/api/v1/results", reportRoutes);
app.use("/api/v1/student", studentRoutes);
app.use("/api/v1", authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

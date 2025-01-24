const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const resultSchema = new Schema(
  {
    school: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    score: {
      type: String,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reportDate: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Result = model("Result", resultSchema);

module.exports = Result;

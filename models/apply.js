const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

const Apply = mongoose.model("apply", userSchema);

module.exports = Apply;

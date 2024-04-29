const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    jobId:{
      type:String,
      required: true,
      unique:true
    },
    jobName: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("job", userSchema);

module.exports = Job;

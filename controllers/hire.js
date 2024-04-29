const Job = require("../models/job");
const Apply = require("../models/apply");
const { v4: uuidv4 } = require('uuid');

const handleGetHire =async (req, res) => {
  const user = req.user;
  let status = false;
  if (user) {
    status = true;
  }
  const jobDetails = await Job.find({ username: user.username });
  res.render("hire", {status, jobDetails});
};
const handlePostHire = async (req, res) => {
  const {
    jobName,
    details,
    mobile,
    email,
    salary,
  } = req.body;


  const jobId = uuidv4();
  const username = req.user.username;

  await Job.create({
    jobId,
    jobName,
    details,
    mobile,
    email,
    salary,
    username
  });
  return res.redirect("/hire");
};


const handleGetView = async (req,res) =>{
  const user = req.user;
  let status = false;
  if (user) {
    status = true;
  }
  const jobId = req.params.id

  const apply = await Apply.find({jobId})
  res.render("view",{status, apply});
}

module.exports = { handleGetHire, handlePostHire, handleGetView };
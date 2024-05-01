const Apply = require("../models/apply");
const Job = require("../models/job");

const handlePostHired = async (req, res) => {
  const {id, user} = req.body;
  const result = await Apply.updateOne({jobId:id,user},{status:"Hired"});
  res.redirect(`/hire/view/${id}`)
};
const handlePostRejeced = async (req, res) => {
  const {id, user} = req.body;
  const result = await Apply.updateOne({jobId:id,user},{status:"Rejected"});
  res.redirect(`/hire/view/${id}`)
};
const handleDelete = async (req, res) => {
  const jobId = req.params.id;
  const result = await Job.deleteOne({jobId})
  res.redirect(`/hire`)
};

module.exports = { handlePostHired, handlePostRejeced, handleDelete };
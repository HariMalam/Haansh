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
  const result1 = await Job.deleteOne({jobId})
  const result2 = await Apply.deleteMany({jobId})
  res.redirect(`/hire`)
};
const handleSearch = async (req, res) => {
  const search = req.body.search;
  req.session.select = req.body.select;
  req.session.search = search.toLowerCase().trim();
  res.redirect(`/work`);
};

const handleCancle = async (req, res) => {
  const _id = req.params.id;
  const result1 = await Apply.deleteOne({_id})
  console.log(result1);
  res.redirect(`/work`);
};

module.exports = { handlePostHired, handlePostRejeced, handleDelete, handleSearch, handleCancle };
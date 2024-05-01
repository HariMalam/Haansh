const Job = require("../models/job");
const Apply = require("../models/apply");

  const handleGetWork = async (req, res) => {
    const user = req.user;
    let status = false;
    let id = null;
    if (user) {
      status = true;
    id = user.username;
    }
    const jobDetails = await Job.find({ username: { $ne: user.username } });
    const apply = await Apply.find({user:req.user.username})

    res.render("work.ejs", { status, jobDetails, apply, id });
  };

const handlePostWork = async (req, res) => {
  const jobId = req.params.id;
  const user = req.user.username;
  const name = req.user.name;
  const email = req.user.email;

  await Apply.create({
    jobId,
    user,
    name,
    email,
  });
  res.redirect("/work");
};

module.exports = { handleGetWork, handlePostWork };

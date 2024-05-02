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

  let jobDetails = [];

  if (req.session.search) {
    const { search, select } = req.session;
    delete req.session.search;
    delete req.session.select;

    const regex = new RegExp(search, "i");

    const query = {
      username: { $ne: user.username },
    };

    if (select === "all") {
      query.$or = [
        { jobName: { $regex: regex.source, $options: "i" } },
        { compName: { $regex: regex.source, $options: "i" } },
        { city: { $regex: regex.source, $options: "i" } },
        { skills: { $in: [regex.source] } },
      ];
    } else if (select === "skills") {
      query.$or = [{ skills: { $in: [regex.source] } }];
    } else {
      query[select] = { $regex: regex.source, $options: "i" };
    }

    jobDetails = await Job.find(query).sort({updatedAt: -1});
  } else {
    jobDetails = await Job.find({ username: { $ne: user.username } }).sort({updatedAt: -1});
  }
  const apply = await Apply.find({ user: req.user.username }).sort({updatedAt: -1});

  const newJobDetails = jobDetails.filter((job) => {
    return !apply.some((apply) => apply.jobId === job.jobId);
  });

  const newJobDetails2 = jobDetails.filter((job) => {
    return apply.some((apply) => apply.jobId === job.jobId);
  });

  res.render("work.ejs", { status, jobdetails: newJobDetails, myjobdetails:newJobDetails2, apply, id });
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

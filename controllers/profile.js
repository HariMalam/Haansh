const User = require("../models/user");

const handleGetProfile = async (req, res) => {
  const username = req.params.user;
  const user = await User.findOne({ username });
  const users = req.user;
  let status = false;
  let id = null;
  if (users) {
    status = true;
    id = users.username;
  }
  res.render("profile.ejs", { status, user, id, username: users.username });
};

module.exports = { handleGetProfile };

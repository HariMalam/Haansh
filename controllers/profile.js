const handleGetProfile = (req, res) => {
  const user = req.user;
  let status = false;
  if (user) {
    status = true;
  }
  res.render("profile.ejs", {status, user});
};

module.exports = { handleGetProfile };
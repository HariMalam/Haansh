const handleGetAbout = (req, res) => {

  const user = req.user;
  let status = false;
  let id = null;
  if (user) {
    status = true;
    id = user.username;
  }
  res.render("about.ejs", {status, id});
};

module.exports = { handleGetAbout };
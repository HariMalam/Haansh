const handleGetAbout = (req, res) => {

  const user = req.user;
  let status = false;
  if (user) {
    status = true;
  }
  res.render("about.ejs", {status});
};

module.exports = { handleGetAbout };
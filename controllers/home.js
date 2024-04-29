const handleGetHome = (req, res) => {
  const user = req.user;
  let status = false;
  if (user) {
    status = true;
  }
  res.render("home.ejs", {status});
};

module.exports = { handleGetHome };
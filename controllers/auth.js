const User = require("../models/user");
const bcrypt = require("bcrypt");

const handleGetLogin = (req, res) => {
  const invalid = req.session.invalid || false;
  const success = req.session.success || false;
  delete req.session.invalid;
  delete req.session.success;
  res.render("login", { invalid, success });
};

const handleGetSignup = (req, res) => {
  res.render("signup");
};

const handlePostLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      req.session.invalid = true;
      req.session.success = false;
      return res.redirect("/login");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      req.session.invalid = true;
      req.session.success = false;
      return res.redirect("/login");
    }

    req.session.uid = user._id;
    console.log(username, ": Login");

    return res.redirect("/");
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).send("Internal Server Error");
  }
};


const handlePostSignup = async (req, res) => {
  const {
    name,
    username,
    mobile,
    email,
    password,
    gender,
    dob,
    address,
  } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    name,
    username: username.trim(),
    mobile,
    email,
    password: hashedPassword,
    gender,
    dob,
    address,
  });

  req.session.success = true;
  console.log(username, ": signup");
  return res.redirect("/login");
};

const handleLogout = (req, res) => {
  console.log("logout")
  delete req.session.uid;
  req.user = null;
  res.redirect("/");
};

module.exports = { handleGetLogin, handleGetSignup, handlePostSignup, handlePostLogin, handleLogout };
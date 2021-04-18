const User = require("../models/User");

// handle errors
const handleErrors = (err) => {
  // console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // duplicate mail error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.signupGet = (req, res) => {
  res.render("signup");
};

module.exports.signupPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.loginGet = (req, res) => {
  res.render("login");
};

module.exports.loginPost = (req, res) => {};

module.exports.logoutGet = (req, res) => {};

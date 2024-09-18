const createError = require("../utils/createError");

exports.login = (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username) {
      return createError(400, "Username should be provided");
    }
  } catch (err) {
    next(err);
  }
};

exports.register = (req, res, next) => {
  res.json({ message: "register" });
};
exports.forgetPassword = (req, res, next) => {
  res.json({ message: "forget password" });
};
exports.resetPassword = (req, res, next) => {
  res.json({ message: "reset password" });
};

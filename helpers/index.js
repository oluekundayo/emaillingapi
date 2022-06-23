const badJson = (res, error = "Bad Request", code = 400) => {
  if (typeof error === "string") error = { user: error };
  if (code === 500) {
    if (typeof error !== "object") error = {};
    error = {
      ...error,
      user:
        "Something went wrong. This is our fault and our Engineers are on it. Please try again soon in about 5 mins time",
    };
  }
  res.status(code).json({ status: false, error });
};

const goodJson = (res, data = "", code = 200, success = true) =>
  res.status(code).json({ status: success, data });

const verifyInput = require("./verify-input");

module.exports = { badJson, goodJson, ...verifyInput };

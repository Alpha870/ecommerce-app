const UsersModel = require("../../models/users.js");

const existsUserAdmin = async (email) => {
  return await UsersModel.findOne({ email });
};

module.exports = { existsUserAdmin };

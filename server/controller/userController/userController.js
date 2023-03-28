const UsersModel = require("../../models/users.js");


const getUser = async () => {
  return await UsersModel.find({});
};

const createUser = async (body) => {
  const newUser = new UsersModel(body);
  await newUser.save();
  return newUser;
};

const existsUser = async (dataEmail) => {
  return await UsersModel.exists({ email : `${dataEmail}`})
};

module.exports = {
  getUser,
  createUser,
  existsUser,
};

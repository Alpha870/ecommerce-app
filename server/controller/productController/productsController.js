const ProductModel = require("../../models/product.js");



const getProducts = async () => {
  return await ProductModel.find({});
};

const getProduct = async (dataEmail) => {
  return await ProductModel.findOne({ dataEmail });
};

const createProduct = async (body) => {
  const newUser = new ProductModel(body);
  await newUser.save();
  return newUser;
};

const editProduct = async (bodyUser, bodyEmail) => {
  const dataEmail = { email: bodyEmail };
  const dataUser = bodyUser;
  await ProductModel.findOneAndUpdate(dataEmail, dataUser);
  return dataUser;
};

const deleteProduct = async (dataEmail) => {
  await ProductModel.deleteOne({ dataEmail });
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  editProduct,
  deleteProduct
};

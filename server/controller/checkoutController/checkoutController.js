const ProductModel = require("../../models/product.js");

const getProducts = async () => {
  return await ProductModel.find({});
};

const getProduct = async (dataId) => {
  return await ProductModel.findById(dataId).exec();
};

module.exports = {
  getProducts,
  getProduct,
};

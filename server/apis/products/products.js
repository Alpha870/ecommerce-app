const express = require("express");
const router = express.Router();
const {
  productController,
} = require("../../controller/productController/index");

const { getProducts, getProduct, createProduct, editProduct, deleteProduct } =
  productController;

// RUTA REGISTRO PRODUCTO

router.get("/products/getAll", async (req, res) => {
  try {
    const allProducts = await getProducts();
    res
      .status(200)
      .json({ message: "Mostrando usuario correctamente", allProducts });
    console.log("mostrando usuario", allProducts);
  } catch (error) {
    console.log(error);
  }
});

router.get("/products/get", async (req, res) => {
  const dataEmail = req.body.email;
  console.log(dataEmail, "estoy despues de traer body");
  try {
    const showUser = await getProduct(dataEmail);
    res
      .status(200)
      .json({ message: "Mostrando usuario correctamente", showUser });
    console.log("mostrando usuario", showUser);
  } catch (error) {
    console.log(error);
  }
});

router.post("/products/create", async (req, res) => {
  const newProduct = req.body;
  try {
    const newCreateProduct = await createProduct(newProduct);
    res.status(200).json({ message: "Formulario enviado correctamente" });
    console.log("creado nuevo usuario", newCreateProduct);
  } catch (error) {
    console.log(error);
  }
});

router.put("/products/edit", async (req, res) => {
  const bodyUser = req.body.formUser;
  const bodyEmail = req.body.formUser.email;
  try {
    const newEditUser = await editProduct(bodyUser, bodyEmail);
    res
      .status(200)
      .json({ message: "Usuario editado correctamente", newEditUser });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/products/delete", async (req, res) => {
  const dataEmail = req.body.email;
  try {
    const destroyUser = await deleteProduct(dataEmail);
    res
      .status(200)
      .json({ message: "Usuario eliminado correctamente", destroyUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const { userController } = require("../../controller/userController/index.js");
const { getUser, createUser, editUser, deleteUser } = userController;

// RUTA REGISTRO USUARIO

router.get("/users/get", async (req, res) => {
  const dataEmail = req.body.email;
  try {
    const showUser = await getUser(dataEmail);
    res.status(200).json({ message: "Mostrando usuario correctamente", showUser });
    console.log("mostrando usuario", showUser);
  } catch (error) {
    console.log(error);
  }
});

router.post("/users/create", async (req, res) => {
  const newUser = req.body;
  try {
    const newCreateUser = await createUser(newUser);
    res.status(200).json({ message: "Formulario enviado correctamente" });
    console.log("creado nuevo usuario", newCreateUser);
  } catch (error) {
    console.log(error);
  }
});

router.put("/users/edit", async (req, res) => {
  const bodyUser = req.body.formUser;
  const bodyEmail = req.body.formUser.email
  try {
    const newEditUser = await editUser(bodyUser, bodyEmail);
    res.status(200).json({ message: "Usuario editado correctamente", newEditUser});
  } catch (error) {
    console.log(error);
  }
});

router.delete("/users/delete", async (req, res) => {
  const dataEmail = req.body.email
  try {
    const destroyUser = await deleteUser(dataEmail)
    res.status(200).json({message: "Usuario eliminado correctamente", destroyUser})
  } catch(error) {
    console.log(error)
  }
})

module.exports = router;

const express = require("express");
const router = express.Router();
const { userController } = require("../../controller/userController/index.js");
const { getUser, createUser, editUser, deleteUser, existsUser } =
  userController;

// RUTA REGISTRO USUARIO

router.get("/users/get", async (req, res) => {
  const dataEmail = req.body.email;
  console.log(dataEmail, "estoy despues de traer body");
  try {
    const showUser = await getUser(dataEmail);
    res
      .status(200)
      .json({ message: "Mostrando usuario correctamente", showUser });
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
  const bodyEmail = req.body.formUser.email;
  try {
    const newEditUser = await editUser(bodyUser, bodyEmail);
    res
      .status(200)
      .json({ message: "Usuario editado correctamente", newEditUser });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/users/delete", async (req, res) => {
  const dataEmail = req.body.email;
  try {
    const destroyUser = await deleteUser(dataEmail);
    res
      .status(200)
      .json({ message: "Usuario eliminado correctamente", destroyUser });
  } catch (error) {
    console.log(error);
  }
});

//RUTA LOGIN USUARIO
router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await existsUser(email);
    if (!user) {
      return res.status(401).send("Usuario no encontrado registrate");
    }
    // si el password del usuario obtenido en el controller
    // no es igual al password enviado por el body ↓↓
    if (user.password !== password) {
      return res
        .status(401)
        .send("Correo electrónico o contraseña incorrectos");
    }
    // si el password del admin obtenido en el controller
    // es igual al password enviado por el body ↓↓
    if (user.password === process.env.ADMIN_PASS) {
      res.send({ user });
      console.log({ user }, "vengo del admin");
    } else {
      res.send({ user });
      console.log({ user }, "vengo del usuario normal");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error de inicio de sesión");
  }
});

module.exports = router;

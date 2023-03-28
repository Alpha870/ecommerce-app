const express = require("express");
const router = express.Router();
const { userController } = require("../../controller/userController/index.js");
const { createUser } = userController;

// RUTA REGISTRO USUARIO

router.get("/users", (req, res) => {
  res.send('estoy vivo')
})

router.post("/users", async (req, res) => {
  const newUser = req.body;
  try {
    const newCreateUser = await createUser(newUser);
    res.status(200).json({ message: 'Formulario enviado correctamente' });
    console.log("creado nuevo usuario", newCreateUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

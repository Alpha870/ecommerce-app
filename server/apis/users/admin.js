const express = require("express");
const router = express.Router();
const { adminController } = require("../../controller/userController/index");
const { existsUserAdmin } = adminController;

router.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await existsUserAdmin(email);
    if (!user) {
      return res.status(401).send("Admin no encontrado registrate");
    }
    // si el password del admin obtenido en el controller
    // no es igual al password enviado por el body ↓↓
    if (user.password !== process.env.ADMIN_PASS) {
      return res
        .status(401)
        .send("Correo electrónico o contraseña incorrectos");
    }
    res.send({ ...user, role:'admin' });
    console.log({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error de inicio de sesión");
  }
});

module.exports = router;

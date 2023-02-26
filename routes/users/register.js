import express from "express";
import Users from "../../models/users.js";
const router = express.Router();

// RUTA REGISTRO USUARIO

router.post('/users', (req, res) => {
  const newUser = new Users({
    email: req.body.email,
    password: req.body.password
  });

  newUser.save((error) => {
    if (error) {
      res.send(error);
    } else {
      res.send('Usuario guardado');
    }
  });
});

export default router;

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const dbConnect = require("./config/mongo.js");
const routerUser = require('./apis/users/index.js')

//CREAR INSTANCIA
const app = express();

//HABILITAR CORS
app.use(cors());

//.env
dotenv.config();

//DB CONEXION
dbConnect();

//bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

//RUTAS
app.use(routerUser)


//escuchar solicitudes
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`aplicacion corriendo ${PORT}`);
});

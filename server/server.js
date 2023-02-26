import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "../config/mongo.js";
import routeRegister from '../routes/users/register.js'


//CREAR INSTANCIA
const app = express();

//HABILITAR CORS
app.use(cors());

//.env
dotenv.config();

//DB CONEXION
dbConnect();

//bodyParser
app.use(express.json())
app.use(express.urlencoded({extended: 'true'}))

//MODEL

//ROUTES

//Rutas usuarios
app.use('/api', routeRegister)


//escuchar solicitudes
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`aplicacion corriendo ${PORT}`);
});

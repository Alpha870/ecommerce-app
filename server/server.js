const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const dbConnect = require("./config/mongo.js");
const routerUser = require("./apis/users/index.js");
const routerProducts = require("./apis/products/index.js");
const routerCheckout = require("./apis/checkout/index.js");
// const routePaypal = require('./apis/paypal/index.js')

//CREAR INSTANCIA
const app = express();

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'nonce-xyz123'; style-src 'nonce-xyz123'"
  );
  next();
});

//HABILITAR CORS
app.use(cors());

// ENCABEZADOS DE SEGURIDAD RECOMENDADOS
app.use(helmet());

//.env
dotenv.config();

//DB CONEXION
dbConnect();

//bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

//RUTAS
app.use(routerUser);
app.use(routerProducts);
app.use(routerCheckout);
// app.use(routePaypal)

//escuchar solicitudes
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`aplicacion corriendo ${PORT}`);
});

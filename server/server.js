import dotenv from 'dotenv'
import express from 'express';
import cors from 'cors';
import { dbConnect } from '../config/mongo.js';
const app = express();

dotenv.config()

app.use(cors())
app.get('/', (req, res) => {
    res.send('Hola, mundo!');
  });
  
  dbConnect()

  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`aplicacion corriendo ${PORT}`);
  });
  
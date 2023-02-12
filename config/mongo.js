import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const dbConnect = async () => {
    const DB_URI = process.env.DB_URI
    mongoose.set('strictQuery', true);
    await mongoose.connect(DB_URI, (err, res) => {
        if(!err){
            console.log('**** CONEXION CORRECTA CON DB****')
        } else {
            console.log('**** ERROR CONEXION CON DB ****')
        }
    })
}
import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true, //valor debe ser único dentro de la colección.
    },
    password: {
      type: String,
    }
  },
  {
    timestamps: true, //timestamps campos createdAt y updatedAt que se actualizarán automáticamente con la fecha y hora de creación
    versionKey: false, //el campo de versión no se debe incluir en los documentos almacenados.
  }
);

const Users = mongoose.model('users', UserSchema)

export default Users
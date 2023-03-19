import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    horas: {
      type: String,
    },
    precios: {
      type: String,
    },
    pagos: {
      type: String,
    },
    caracteristicas: {
      type: String,
    },
    terminado: {
      type: String,
    },
  },
  {
    timestamps: true, //timestamps campos createdAt y updatedAt que se actualizarán automáticamente con la fecha y hora de creación
    versionKey: false, //el campo de versión no se debe incluir en los documentos almacenados.
  }
);

const Products = mongoose.model("products", ProductSchema);

export default Products;

const { Schema, model } = require("mongoose")

const CategorySchema = new Schema(
   {
      nameCategory: {
         type: String,
         enum: ['Papelería','Cafetería','Transporte','Otro'],
         required: [true, 'Obligatorio agregar categoría']
      }
   }
)
//Nombre String, Nombre del model, Nombre de la coleccion en mongo
module.exports = model("categoria", CategorySchema, "Category")
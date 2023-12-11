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

module.exports = model("category", CategorySchema, "Categoria")
const { Schema, model } = require("mongoose")

const CategorySchema = new Schema(
   {
      nameCategory: { type: String }
   }
)

module.exports = model("category", CategorySchema, "Categoria")
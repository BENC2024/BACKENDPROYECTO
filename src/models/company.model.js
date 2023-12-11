
const { Schema, model } = require("mongoose")

const CompanySchema = new Schema(
   {
      name: {
         type: String,
         required: [true,'Nombre requerido']
      },
      nit: {
         type: String,
         required: [true,'NIT requerido']
      },
      phone: {
         type: Number,
         required: [true,'Numero telefonico requerido']
      },
      direction: {
         type: String,
         required: [true,'Falta direccion']
      },
      email: {
         type: String,
         required: [true,'Falta correo']
      },
   }
)

module.exports = model("company", CompanySchema, "Company")

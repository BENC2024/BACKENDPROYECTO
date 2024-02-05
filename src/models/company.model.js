
const { Schema, model } = require("mongoose")

const CompanySchema = new Schema(
   {
      nombreEmpresa: {
         type: String,
         required: true
      },
      direccionEmpresa: {
         type: String,
         required: true
      },
      telefonoEmpresa: {
         type: Number,
         required: true
      },
      emailEmpresa: {
         type: String,
         required: true
      }
   }
)

module.exports = model("company", CompanySchema, "Company")

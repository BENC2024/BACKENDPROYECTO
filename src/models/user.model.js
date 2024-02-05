const { Schema, model, SchemaType } = require("mongoose")

const UserSchema = new Schema(
   {
      empresaId: {
         type: Schema.Types.ObjectId, 
         ref: "company",
         required: [true,'Falta id empresa']
      },
      username: {
         type: String,
         required: [true,'Apellido requerido']
      },
      nombre: {
         type: String,
         required: [true,'Numero requerido']
      },
      rol: {
         type: String,
         required: [true,'Falta direccion']
      },
      correo: {
         type: String, 
         required: [true,'Falta correo']
      }
   }
)

module.exports = model("user", UserSchema, "User")
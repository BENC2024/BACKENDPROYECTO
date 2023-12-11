const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
   {
      first_name: {
         type: String,
         required: [true,'Nombre requerido']
      },
      last_name: {
         type: String,
         required: [true,'Apellido requerido']
      },
      phone: {
         type: Number,
         required: [true,'Numero requerido']
      },
      direction: {
         type: String,
         required: [true,'Falta direccion']
      },
      role: {
         type: Schema.Types.ObjectId, 
         ref: "role" 
      }
   }
)

module.exports = model("user", UserSchema, "User")
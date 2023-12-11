const { Schema, model } = require("mongoose")

const RoleSchema = new Schema(
   {
      nameRole: { 
         type: String,
         enum: ['Administrador', 'Colaborador', 'Usuario principal'],
         required: [true, 'Obligatorio agregar rol']
      }
   }
)

module.exports = model("role", RoleSchema, "Rol")
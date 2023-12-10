const { Schema, model } = require("mongoose")

const RoleSchema = new Schema(
   {
      nameRole: { type: String }
   }
)

module.exports = model("role", RoleSchema, "Rol")
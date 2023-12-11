const { Schema, model } = require("mongoose")

const StatusSchema = new Schema(
   {
      nameStatus: { 
         type: String,
         enum: ['Aprobado', 'Denegado', 'Pendiente'],
         required: true 
      }
   }
)

module.exports = model("status", StatusSchema, "State")
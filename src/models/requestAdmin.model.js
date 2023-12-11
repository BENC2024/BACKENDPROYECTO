
const { Schema, model } = require("mongoose")

const RequestAdminSchema = new Schema(
   {
      date: {
         type: Date,
         required: [true,'Fecha requerida']
      },
      description: {
         type: String,
         maxLength: 100,
         required: [true,'Descripcion requerida']
      },
      status: {
         type: Schema.Types.ObjectId, 
         ref: "status" 
      }
   }
)

module.exports = model("requestAdmin", RequestAdminSchema, "RequestAdmin")
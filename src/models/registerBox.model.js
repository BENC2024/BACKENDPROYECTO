
const { Schema, model } = require("mongoose")

const RegisterBoxSchema = new Schema(
   {
      date: {
         type: Date,
         required: [true,'Fecha requerida']
      },
      starting_amount: {
         type: Number,
         max: [1000000,'No se admiten valores superiores'],
         required: [true,'Apellido requerido']
      },
      actual_amount: {
         type: Number,
         max: [1000000,'No se admiten valores superiores'],
         required: [true,'Apellido requerido']
      },
      applicant: {
         type: Schema.Types.ObjectId, 
         ref: "user" 
      },
      company: {
         type: Schema.Types.ObjectId, 
         ref: "company" 
      }
   }
)

module.exports = model("registerBox", RegisterBoxSchema, "RegisterBox")


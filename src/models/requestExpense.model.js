
const { Schema, model } = require("mongoose")

const RequestExpenseSchema = new Schema(
   {
      date: {
         type: Date,
         required: [true,'Fecha requerida']
      },
      amount: {
         type: Number,
         min: [100000,'No se admiten valores inferiores'],
         max: [1000000,'No se admiten valores superiores'],
         required: [true,'valor requerido']
      },
      description: {
         type: String,
         maxLength: 100,
         required: [true,'Descripcion requerida']
      },
      available: {
         type: Schema.Types.ObjectId, 
         ref: "registerBox"
      },
      status: {
         type: Schema.Types.ObjectId, 
         ref: "status" 
      }
   }
)

module.exports = model("requestExpense", RequestExpenseSchema, "RequestExpense")
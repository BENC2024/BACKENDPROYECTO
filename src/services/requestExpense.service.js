const requestExpenseSchema = require("../models/requestExpense.model")
const statusSchema = require("../models/status.model")

const listRequestExpense = async () => {
   return await RequestExpenseSchema.find().populate({
      path: "status",
      model: statusSchema
   });
}

const showRequestExpense = async (id) => {
   return await RequestExpenseSchema.findById(id).populate({
      path: "status",
      model: statusSchema
   })
}

const saveRequestExpense = async (RequestExpensive) => {
   let RequestExpensive = new RequestExpenseSchema(RequestExpensive);
   return await RequestExpensive.save();
}

const updateRequestExpense = async (RequestExpensive,id) => {
   try {
      const requests = await RequestExpenseSchema.findById(id);
      if (requests) {
         await RequestExpenseSchema.findByIdAndUpdate(id, RequestExpensive)
         return "update";
      } else {
        return "No found";
      }
   } catch (error) {
      return "Error";
   }
}

module.exports = {
   listRequestExpense,
   showRequestExpense,
   saveRequestExpense,
   updateRequestExpense
}
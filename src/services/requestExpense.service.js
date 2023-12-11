const requestExpenseSchema = require("../models/requestExpense.model")
const statusSchema = require("../models/status.model")

const listRequestExpense = async () => {
   return await requestExpenseSchema.find().populate({
      path: "status",
      model: statusSchema
   });
}

const showRequestExpense = async (id) => {
   return await requestExpenseSchema.findById(id).populate({
      path: "status",
      model: statusSchema
   })
}

const saveRequestExpense = async (RequestExpensive) => {
   let requestExp = new requestExpenseSchema(RequestExpensive);
   return await requestExp.save();
}

const updateRequestExpense = async (RequestExpensive,id) => {
   try {
      const requests = await requestExpenseSchema.findById(id);
      if (requests) {
         await requestExpenseSchema.findByIdAndUpdate(id, RequestExpensive)
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
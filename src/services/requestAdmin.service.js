const requestAdminSchema = require("../models/requestAdmin.model")
const statusSchema = require("../models/status.model")

const listRequestAdmin = async () => {
   return await requestAdminSchema.find().populate({
      path: "status",
      model: statusSchema
   });
}

const showRequestAdmin = async (id) => {
   return await requestAdminSchema.findById(id).populate({
      path: "status",
      model: statusSchema
   })
}

const saveRequestAdmin = async (requestAdmin) => {
   let requestAdmin = new requestAdminSchema(requestAdmin);
   return await requestAdmin.save();
}

const updateRequestAdmin = async (requestAdmin,id) => {
   try {
      const requests = await requestAdminSchema.findById(id);
      if (requests) {
         await requestAdminSchema.findByIdAndUpdate(id, requestAdmin)
         return "update";
      } else {
        return "No found";
      }
   } catch (error) {
      return "Error";
   }
}

module.exports = { 
   listRequestAdmin,
   showRequestAdmin,
   saveRequestAdmin,
   updateRequestAdmin
}
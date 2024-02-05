const userSchema = require("../models/user.model")
const companySchema = require("../models/company.model")

const listUser = async () => { 
   console.log("En el listado de usuarios")
   return await userSchema.find().populate(
      { path: "empresaId", model: companySchema },
   );
}

const detailUser = async (id) => { 
   console.log("En el detalle de usuario")
   return await userSchema.findById(id).populate({
      path: "empresaId",
      model: companySchema
   })
}

module.exports = { 
   listUser,
   detailUser
}
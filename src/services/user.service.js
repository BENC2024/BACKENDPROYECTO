const userSchema = require("../models/user.model")
const roleSchema = require("../models/role.model")

const listUser = async () => { 
   return await userSchema.find().populate(
      { path: "role", model: roleSchema },
   );
}

module.exports = { 
   listUser
}
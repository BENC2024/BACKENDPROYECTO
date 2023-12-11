const roleSchema = require("../models/role.model")

const listRole = async () => {
   return await RoleSchema.find()
}

module.exports = { 
   listRole
}
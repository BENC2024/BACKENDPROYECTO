const { listRole } = require("../services/role.service")

const roleController = { }

roleController.getAllrole = async (req,res) => { 
   const listRole = await listRole()
   res.json(listRole)
};

module.exports = roleController

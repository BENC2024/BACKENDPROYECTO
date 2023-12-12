const { listRole } = require("../services/role.service")

const roleController = { }

roleController.getAllRole = async (req,res) => { 
   const listRole = await listRole()
   res.json(listRole)
};

module.exports = roleController

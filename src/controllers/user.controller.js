const { listUser } = require("../services/user.service")

const userController = { }

userController.getAllUser = async (req,res) => { 
   const listUser = await listUser()
   res.json(listUser)
};

module.exports = userController


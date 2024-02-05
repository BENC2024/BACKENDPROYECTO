const { 
   listUser,
   detailUser
} = require("../services/user.service")

const userController = { }

userController.getAllUser = async (req,res) => { 
   const listadoUser = await listUser()
   res.json(listadoUser)
};

userController.getOneUser = async (req,res) => {
   const { id } = req.params
   const detalleUsuario = await detailUser(id)
   res.json(detalleUsuario)
}

module.exports = userController

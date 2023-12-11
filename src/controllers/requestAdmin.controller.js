
const { 
   listRequestAdmin,
   showRequestAdmin,
   saveRequestAdmin,
   updateRequestAdmin 
} = require("../services/requestAdmin.service")

const requestAdminController = { }

requestAdminController.getAllRequestAdmins = async (req,res) => { 
   const listRequestAdm = await listRequestAdmin()
   res.json(listRequestAdm)
};

requestAdminController.getOneRequestAdmin = async (req,res) => {
   const { id } = req.params;
   const showRequestAdm = await showRequestAdmin(id)
   res.json(showRequestAdm)
};

requestAdminController.saveRequestAdmin = async (req,res) => {
   await saveRequestAdmin(req.body)
   res.send("Guardado");
}

requestAdminController.updateRequestAdmin = async (req,res) => {
   const { id }= req.params;
   const response = await updateRequestAdmin(req.body,id);
   res.send(response);
}

module.exports = requestAdminController

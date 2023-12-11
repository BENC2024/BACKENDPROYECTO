
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllRequestAdmins,
   getOneRequestAdmin,
   saveRequestAdmin,
   updateRequestAdmin
} = require("../controllers/registerBox.controller") 


routes.get("/listRequestAdmin", getAllRequestAdmins);
routes.get("/showRequestAdmin/:id", getOneRequestAdmin);
routes.post("/saveRequestAdmin",saveRequestAdmin)
routes.put("/updateRequestAdmin/:id", updateRequestAdmin);

module.exports = routes
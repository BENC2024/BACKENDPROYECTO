
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllRole
} = require("../controllers/role.controller") 

routes.get("/listRole", getAllRole);

module.exports = routes 
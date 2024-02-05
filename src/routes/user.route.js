
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllUser,
   getOneUser
} = require("../controllers/user.controller") 

routes.get("/listUser", getAllUser);
routes.get("/detailUser/:id", getOneUser);

module.exports = routes
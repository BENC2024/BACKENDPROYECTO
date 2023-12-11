
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllRegisterBox
} = require("../controllers/registerBox.controller") 

routes.get("/showRegisterBox/:id", getAllRegisterBox);

module.exports = routes 
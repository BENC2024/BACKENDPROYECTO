
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllStatus
} = require("../controllers/status.controller") 

routes.get("/listStatus", getAllStatus);

module.exports = routes 
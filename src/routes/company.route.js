
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllCompany
} = require("../controllers/company.controller") 

routes.get("/listCompany", getAllCompany);

module.exports = routes 
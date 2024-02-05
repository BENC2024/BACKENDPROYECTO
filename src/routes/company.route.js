
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllCompany,
   getOneCompany
} = require("../controllers/company.controller") 

routes.get("/listCompany", getAllCompany);
routes.get("/detailCompany/:id", getOneCompany);


module.exports = routes 
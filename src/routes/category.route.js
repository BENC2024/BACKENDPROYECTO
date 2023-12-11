//Proceso de configuracion de las rutas

const { Router } = require("express"); //Funcion especifica de express
const routes = Router() //Funcion routes de express

const { 
   getAllCategory
} = require("../controllers/category.controller") 

routes.get("/listCategory", getAllCategory);

module.exports = routes // exportar las rutas
//Proceso de configuracion de las rutas

const { Router } = require("express"); //Funcion especifica de express
const routes = Router() //Funcion routes de express

const { 
   getAllCategory,
   getOneCategory
} = require("../controllers/category.controller") 

routes.get("/listCategory", getAllCategory);
routes.get("/detailCategory/:id", getOneCategory);

module.exports = routes // exportar las rutas
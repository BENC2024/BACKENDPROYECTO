//Proceso de configuracion de las rutas

const { Router } = require("express"); //Funcion especifica de express
const routes = Router() //Funcion routes de express

const { 
   getAllCategory
} = require("../controllers/category.controller") //requiero el 
//las funciones del controlador

module.exports = routes // exportar las rutas
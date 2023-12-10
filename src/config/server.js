
//modulo de express
const express = require("express")
const app = express() //Se traen las funciones de express

const categoryRoutes = require("../routes/category.route")
const companyRoutes = require("../routes/company.route")
const registerBoxRoutes = require("../routes/registerBox.route")
const requestExpenseRoutes = require("../routes/requestExpense.route")
const roleRoutes = require("../routes/role.route")
const statusRoutes = require("../routes/status.route")
const userRoutes = require("../routes/user.route")

app.use(express.json()) //Solamente utilizar el formato json

//Configuracion de las rutas para el proceso de iniciacion del servidor(uso de las rutas)
app.use(categoryRoutes)
app.use(companyRoutes)
app.use(registerBoxRoutes)
app.use(requestExpenseRoutes)
app.use(roleRoutes)
app.use(statusRoutes)
app.use(userRoutes)

//Set para enviar configuraciones
app.set("puerto", process.env.PORT || port ) 
//Uso del puerto de comunicacion en express, coloque en la variable "port"
//el valor del puerto => 3000, la configuracion del puerto para el final

module.exports = app //Exportando el modulo de express en la constante app
//Para que todo la aplicacion utilice este modulo
//PARSEO : ANALISIS DE LA ESTRUCTURA DE UN CODIGO



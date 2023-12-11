
//modulo de express
const express = require("express")
const app = express() //Se traen las funciones de express

const categoryRoutes = require("../routes/category.route")
const companyRoutes = require("../routes/company.route")
const registerBoxRoutes = require("../routes/registerBox.route")
const requestExpenseRoutes = require("../routes/requestExpense.route")
const requestAdminRoutes = require("../routes/requestAdmin.route")
const roleRoutes = require("../routes/role.route")
const statusRoutes = require("../routes/status.route")
const userRoutes = require("../routes/user.route")

app.use(express.json()) //Solamente utilizar el formato json
app.use(express.urlencoded({ extended: true }));
app.use(cors()) // Uso de enlace cruzado

app.use(categoryRoutes)
app.use(companyRoutes)
app.use(registerBoxRoutes)
app.use(requestAdminRoutes)
app.use(requestExpenseRoutes)
app.use(roleRoutes)
app.use(statusRoutes)
app.use(userRoutes)

app.set("puerto", process.env.PORT) 

module.exports = app



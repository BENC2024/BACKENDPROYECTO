
const { Router } = require("express"); 
const routes = Router()

const { 
   getAllRequestExpenses,
   getOneRequestExpense,
   saveRequestExpense,
   updateRequestExpense
} = require("../controllers/requestExpense.controller") 

routes.get("/listRequestExpense", getAllRequestExpenses);
routes.get("/showRequestExpense/:id", getOneRequestExpense);
routes.post("/saveRequestExpense",saveRequestExpense)
routes.put("/updateRequestExpense/:id", updateRequestExpense);

module.exports = routes
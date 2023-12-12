const { 
   listRequestExpense,
   showRequestExpense,
   saveRequestExpense,
   updateRequestExpense
} = require("../services/requestExpense.service") 

const requestExpenseController = { } 

requestExpenseController.getAllRequestExpenses = async (req,res) => { 
   const listRequestExp = await listRequestExpense()
   res.json(listRequestExp)
};

requestExpenseController.getOneRequestExpense = async (req,res) => {
   const { id } = req.params;
   const showRequestExp = await showRequestExpense(id)
   res.json(showRequestExp)
};

requestExpenseController.saveRequestExpense = async (req,res) => {
   await saveRequestExpense(req.body)
   res.send("Guardado");
}

requestExpenseController.updateRequestExpense = async (req,res) => {
   const { id }= req.params;
   const response = await updateRequestExpense(req.body,id);
   res.send(response);
}

module.exports = requestExpenseController

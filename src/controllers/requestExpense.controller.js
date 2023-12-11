const { 
   listRequestExpense,
   showRequestExpense,
   saveRequestExpense,
   updateRequestExpense
} = require("../services/requestExpense.service") 

const requestExpenseController = { } 

requestExpenseController.getAllRequestAdmins = async (req,res) => { 
   const listRequestExp = await listRequestExpense()
   res.json(listRequestExp)
};

requestExpenseController.getOneRequestAdmin = async (req,res) => {
   const { id } = req.params;
   const showRequestExp = await showRequestExpense(id)
   res.json(showRequestExp)
};

requestExpenseController.saveRequestAdmin = async (req,res) => {
   await saveRequestExpense(req.body)
   res.send("Guardado");
}

requestExpenseController.updateRequestAdmin = async (req,res) => {
   const { id }= req.params;
   const response = await updateRequestExpense(req.body,id);
   res.send(response);
}

module.exports = requestExpenseController

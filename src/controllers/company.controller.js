const { listCompany } = require("../services/company.service")

const companyController = { } 

companyController.getAllCompany = async (req,res) => { 
   const listCompany = await listCompany()
   res.json(listCompany)
};

module.exports = companyController

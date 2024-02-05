const { 
   listCompany,
   detailCompany
} = require("../services/company.service")

const companyController = { } 

companyController.getAllCompany = async (req,res) => { 
   const listadoCompany = await listCompany()
   res.json(listadoCompany)
};

companyController.getOneCompany = async (req,res) => {
   const { id } = req.params
   const detalleCompania = await detailCompany(id)
   res.json(detalleCompania)
}

module.exports = companyController

const companySchema = require("../models/company.model")

const listCompany = async () => {
   console.log("En el listado de compania")
   return await companySchema.find()
}

const detailCompany = async (id) => {
   console.log("En el detalle de compania")
   return await companySchema.findById(id)
}

module.exports = { 
   listCompany,
   detailCompany
}

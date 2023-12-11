const companySchema = require("../models/company.model")

const listCompany = async () => {
   return await companySchema.find()
}

module.exports = { 
   listCompany
}
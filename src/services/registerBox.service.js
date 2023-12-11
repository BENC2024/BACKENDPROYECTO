const registerBoxSchema = require("../models/registerBox.model")
const userSchema = require("../models/user.model")
const companySchema = require("../models/company.model")

const showRegisterBox = async (id) => { 
   return registerBoxSchema.findById(id).populate(
      { path: "applicant", model: userSchema },
      { path: "company", model: companySchema },
   );
}

module.exports = { 
   showRegisterBox
}
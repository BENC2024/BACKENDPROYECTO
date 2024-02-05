const statusSchema = require("../models/status.model")

const listStatus = async () => {
   console.log("En el listado de estados")
   return await statusSchema.find()
}

module.exports = { 
   listStatus
}
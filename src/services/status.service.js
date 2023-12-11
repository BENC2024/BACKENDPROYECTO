const statusSchema = require("../models/status.model")

const listStatus = async () => {
   return await StatusSchema.find()
}

module.exports = { 
   listStatus
}
const { listStatus } = require("../services/status.service")

const statusController = { } 

statusController.getAllStatus = async (req,res) => { 
   const listStatus = await listStatus()
   res.json(listStatus)
};

module.exports = statusController

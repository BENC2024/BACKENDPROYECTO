const { listStatus } = require("../services/status.service")

const statusController = { } 

statusController.getAllstatus = async (req,res) => { 
   const listStatus = await listStatus()
   res.json(listStatus)
};

module.exports = statusController

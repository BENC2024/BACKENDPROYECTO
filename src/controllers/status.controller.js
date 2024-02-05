const { listStatus } = require("../services/status.service")

const statusController = { } 

statusController.getAllStatus = async (req,res) => { 
   const status = await listStatus()
   res.json(status)
};

module.exports = statusController

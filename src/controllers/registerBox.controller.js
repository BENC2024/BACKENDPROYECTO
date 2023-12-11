const { showRegisterBox } = require("../services/registerBox.service") 

const registerBoxController = { }

registerBoxController.getAllRegisterBox = async (req,res) => { 
   const { id } = req.params;
   const showRegisterBox = await showRegisterBox(id)
   res.json(showRegisterBox)
};

module.exports = registerBoxController

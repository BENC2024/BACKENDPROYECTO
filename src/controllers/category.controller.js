const { listCategory } = require("../services/category.service")

const categoryController = { }

categoryController.getAllCategory = async (req,res) => { 
   const listCategory = await listCategory()
   res.json(listCategory)
};

module.exports = categoryController

const { 
   listCategory,
   detailCategory,
   saveCategory
 } = require("../services/category.service")

const categoryController = { }

categoryController.getAllCategory = async (req,res) => { 
   const listadoCategory = await listCategory()
   res.json(listadoCategory)
}; 

categoryController.getOneCategory = async (req,res) => {
   const { id } = req.params;
   const detalleCategoria = await detailCategory(id)
   res.json(detalleCategoria)
}

categoryController.postCategory = async (req,res) => {
   await saveCategory(req.body)
   res.send("Guardado")
}

module.exports = categoryController

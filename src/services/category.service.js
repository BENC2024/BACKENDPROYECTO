const categorySchema = require("../models/category.model")

const listCategory = async () => {
   console.log("En el listado de categorias")
   return await categorySchema.find()
}

const detailCategory = async (id) => {
   console.log("En el detalle")
   return await categorySchema.findById(id)
}

const saveCategory = async (categoria) => {
   let save = new categorySchema(categoria);
   return await save.save();
}

module.exports = { 
   listCategory,
   detailCategory,
   saveCategory
}


const categorySchema = require("../models/category.model")

const listCategory = async () => {
   return await categorySchema.find()
}

module.exports = { 
   listCategory
}
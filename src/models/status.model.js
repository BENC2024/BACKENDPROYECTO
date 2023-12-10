const { Schema, model } = require("mongoose")

const StatusSchema = new Schema(
   {
      nameStatus: { type: String }
   }
)

module.exports = model("status", StatusSchema, "Estado")
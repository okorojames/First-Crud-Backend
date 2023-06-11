const mongoose = require("mongoose");
const CRUD_SCHEMA = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Crud", CRUD_SCHEMA);

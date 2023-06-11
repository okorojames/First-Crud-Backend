const express = require("express");
const router = express.Router();
const {
  addCrud,
  getCrud,
  getCruds,
  deleteCrud,
  updateCrud,
} = require("../controllers/crudController");
router.post("/post-crud", addCrud);
router.get("/get-cruds", getCruds);
router.get("/get-crud/:id", getCrud);
router.delete("/delete-crud/:id", deleteCrud);
router.patch("/update-crud/:id", updateCrud);

module.exports = router;

const Crud = require("../models/crudModel");
const mongoose = require("mongoose");

// adding a crud
const addCrud = async (req, res) => {
  const { title, description, author } = req.body;
  try {
    if (!title || !description || !author) {
      res.status(400).json({ msg: "Please fill in the fields" });
      return;
    } else {
      const crud = new Crud({ title, description, author });
      await crud.save();
      res.status(201).json(crud);
    }
  } catch (error) {
    res.status(500).json({ Err: error });
  }
};

// getting all the cruds
const getCruds = async (req, res) => {
  try {
    const crudData = await Crud.find().sort({ createdAt: -1 });
    return res.status(200).json(crudData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Err: "something went wrong" });
  }
};

// get a single crud
const getCrud = async (req, res) => {
  const { id } = req.params;
  console.log(typeof id);
  try {
    const CrudData = await Crud.findById(id);
    if ((await Crud.findById(id)) === null)
      return res.status(404).json({ err: "mumu thief 😂" });

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ err: "No such crud found" });

    return res.status(200).json(CrudData);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Err: "internal server error" });
  }
};

// deleting a crud
const deleteCrud = async (req, res) => {
  const { id } = req.params;
  try {
    await Crud.findByIdAndDelete(id);
    return res.status(200).json({
      msg: `Crud deleted`,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "is nothing, dey play" });
  }
};

// updating crud details
const updateCrud = async (req, res) => {
  const { id } = req.params;
  try {
    const CrudData = await Crud.findByIdAndUpdate(id, {
      ...req.body,
      new: true,
    });
    return res.status(200).json(CrudData);
  } catch (err) {
    return res.status(500).json({ err: "not updated" });
  }
};

module.exports = { addCrud, getCruds, getCrud, deleteCrud, updateCrud };

const express = require("express");
require("dotenv").config();
const routes = require("./routes/crudRoute");
const app = express();
const PORT = process.env.PORT || "5000";
const db = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");

// middle=wares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/crud", routes);

// app get functions from routes
app.get("/", (req, res) => {
  res.send("Home route");
});

// listening to database ports
app.listen(PORT, () => {
  db.dbConnectionMethod();
  console.log("server started at port", PORT);
});

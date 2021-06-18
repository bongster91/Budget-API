const express = require("express");
const cors = require("cors");

const app = express();
const transactionsController = require("./controllers/transactionsController");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/transactions", transactionsController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
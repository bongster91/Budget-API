const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");



transactions.get("/", (req, res) => {
    res.status(200).json(transactionsArray)
});

transactions.get("/:id", (req, res) => {
    const { id } = req.params;
   
    transactionsArray[id] ?
    res.status(200).json(transactionsArray[id]) : res.redirect("/404")
});

transactions.post("/", (req, res) => {
    transactionsArray.push(req.body)
    res.json(transactionsArray[transactionsArray.length - 1])
});

transactions.delete("/:id", (req, res) => {
    
})

// transactions.put()

module.exports = transactions;
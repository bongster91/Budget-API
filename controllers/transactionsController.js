const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions");

transactions.get("/", (req, res) => {
    res.status(200).json(transactionsArray);
});

transactions.get("/:index", (req, res) => {
    const { index } = req.params;
   
    transactionsArray[index] ?
    res.status(200).json(transactionsArray[index]) : res.redirect("/404");
});

transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.delete("/:index", (req, res) => {
    const { index } = req.params;

    transactionsArray[index] ?
    res.json(transactionsArray.splice(index, 1)) : res.redirect("/404");
});

transactions.put("/:index", (req, res) => {
    const { index } = req.params;

    if (transactionsArray[index]) {
        transactionsArray[index] = req.body;
        res.json(transactionsArray[index]);
    } else {
        res.redirect("/404");
    };
});

module.exports = transactions;
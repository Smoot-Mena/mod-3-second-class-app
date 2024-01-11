const express = require("express");
const port = 5000;

const app = express();
const fruits = require("./models/fruits.js");

app.get("/", (req, res) => {
    res.send("home page");
});

app.get("/fruits/", (req, res) => {
    res.send(fruits);
})

app.get("/fruits/:indexOfFruit", (req, res) => {
    res.send(fruits[req.params.indexOfFruit]);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
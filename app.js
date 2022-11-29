// MODULES
const fs = require("fs");
const replacetemplates = require("./modules/replacePlaceHolder");
const express = require("express");
const app = express();

// VARIABLES
const cards = fs.readFileSync(`${__dirname}/templates/cards.html`, "utf-8");
const product = fs.readFileSync(`${__dirname}/templates/product.html`, "utf-8");
const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);

// DATA
const data = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
);

// ROUTES
app.get("/", (req, res) => {
  const newCards = data.map((datum) => replacetemplates(cards, datum));
  const newOverview = overview.replace("[%PRODUCTOVERVIEW%]", newCards);
  res.status(200).send(newOverview);
});

app.get("/product/:id", (req, res) => {
  const dataProduct = data[req.params.id];
  const newProduct = replacetemplates(product, dataProduct);
  res.status(200).send(newProduct);
});

app.get("/api", (req, res) => {
  res.status(200).json({ status: "success", result: data.length, data });
});

app.get("*", (req, res) => {
  res.status(404).send("page not found");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Express APP is listening on ${PORT}`);
});

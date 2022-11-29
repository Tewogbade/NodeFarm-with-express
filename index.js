"use strict";

const http = require("http");
const fs = require("fs");
const url = require("url");
const replacetemplates = require("./modules/replacePlaceHolder");

const api = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const cards = fs.readFileSync(`${__dirname}/templates/cards.html`, "utf-8");
const product = fs.readFileSync(`${__dirname}/templates/product.html`, "utf-8");

const overview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const data = JSON.parse(api);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  if (["/overview", "/", "/lanre"].includes(pathname)) {
    const newCards = data.map((datum) => replacetemplates(cards, datum));
    const newOverview = overview.replace("[%PRODUCTOVERVIEW%]", newCards);

    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(newOverview);
  } else if (pathname === "/product") {
    const dataProduct = data[query.id];
    const newproduct = replacetemplates(product, dataProduct);
    res.end(newproduct);
  } else if (pathname === "/api") {
    np;
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(api);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "welcome here",
    });
    res.end(
      "<h1 style='text-align: center; font-weight:bold; color: red'>Page Not Found</h1>"
    );
  }
});

// server.listen(8000, "localhost", () => {
//   console.log("listening on port 8000");
// });

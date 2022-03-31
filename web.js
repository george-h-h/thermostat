// const express = require("express");
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, express!");
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);

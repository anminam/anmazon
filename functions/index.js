const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app(cors({ origin: true }));
app(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello wolrd");
});

exports.api = functions.https.onRequest(app);

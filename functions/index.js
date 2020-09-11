const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HPzOqEZy06NtzOGKvQSSl4DkUhziYg1ZEpMOYk8LRvvHFiftLdCADqM6cTai1xyOSXYCiuSTE7FtNNBkH2W9Vwx00m8dwUTYF"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello wolrd");
});
app.post("/payments/create", async (req, res) => {
  const { total } = req.query;

  try {
    const intent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log("total", total);

    res.status(201).send({
      clientSecret: intent.client_secret,
    });
  } catch (error) {
    // TODO:
    res.status(201).send({
      clientSecret: "abc",
    });
    // res.status(500).send(error.toString());
  }
});
// http://localhost:5001/anmazon/us-central1/api
// http://localhost:5001/anmazon/us-central1/api/payments/create?total=123123

exports.api = functions.https.onRequest(app);

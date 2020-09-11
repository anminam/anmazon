import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51HPzOqEZy06NtzOGKvQSSl4DkUhziYg1ZEpMOYk8LRvvHFiftLdCADqM6cTai1xyOSXYCiuSTE7FtNNBkH2W9Vwx00m8dwUTYF",
  { apiVersion: "2020-08-27" }
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello wolrd");
});
app.post("/payments/create", async (req, res) => {
  const total = Number(req.query.total);

  try {
    const intent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    console.log("intent", intent);
    res.status(201).send({
      clientSecret: intent.client_secret,
    });
  } catch (error) {
    // TODO:
    // res.status(500).send({
    //   clientSecret: "abcd",
    // });
    res.status(500).send(error.toString());
  }
});
// http://localhost:5001/anmazon/us-central1/api
// http://localhost:5001/anmazon/us-central1/api/payments/create?total=123123

exports.api = functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KnxnRHUWpD20xTSr2O3zeP9N4OU2xOFnHRxP9pnU8gteJfYtWnPCsyn96Gl3OMxdw2Di4y0Jjn9oaAqu9AYWoC200TC5nfgRF"
);

const app = express();

app.use(
  cors({
    origin: true,
  })
);

app.use(express.json());

app.post("/payments/create", async (req, res) => {
  try {
    const { amount, shipping } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: "usd",
    });

    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: err.message,
    });
  }
});

app.get("*", (req, res) => {
  res.status(400).send("404, Not Found");
});

exports.api = functions.https.onRequest(app);

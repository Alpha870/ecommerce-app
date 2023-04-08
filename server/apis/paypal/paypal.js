// const express = require("express");
// const router = express.Router();
// const paypal = require("@paypal/checkout-server-sdk");
// const { client } = require('../../config/paypal');
// let clientId = process.env.PAYPAL_CLIENT_ID;
// let clientSecret = process.env.PAYPAL_CLIENT_SECRET;
// let environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
// let client = new paypal.core.PayPalHttpClient(environment);

// Crear una orden de pago
// router.post("/paypal/order", async (req, res) => {
//   const priceProduct = req.body.price;

//   const request = new paypal.orders.OrdersCreateRequest();
//   request.prefer("return=representation");
//   request.requestBody({
//     intent: "CAPTURE",
//     purchase_units: [
//       {
//         amount: {
//           currency_code: "USD",
//           value: `${priceProduct}`,
//         },
//       },
//     ],
//   });

//   try {
//     const response = await client.execute(request);
//     res.send(`Order: ${JSON.stringify(response.result)}`);
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// Capturar los fondos de la orden de pago
// router.post("/paypal/capture", async (req, res) => {
//   const orderID = req.body.orderID;

//   const request = new paypal.orders.OrdersCaptureRequest(orderID);
//   request.requestBody({});

//   try {
//     const response = await client.execute(request);
//     res.send({ status: response.result.status });
//   } catch (error) {
//     console.error(error);
//     res.sendStatus(500);
//   }
// });

// module.exports = router;

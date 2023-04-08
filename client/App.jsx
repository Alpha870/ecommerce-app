import React from "react";
import "./App.css";
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": `${import.meta.env.PAYPAL_CLIENT_ID}`,
  currency: "EUR",
  intent: "capture",
};

function App() {
  return (
    <>
      <AuthProvider>
        <PayPalScriptProvider deferLoading = { true } options={initialOptions}>
          <AppRouter />
        </PayPalScriptProvider>
      </AuthProvider>
    </>
  );
}

export default App;

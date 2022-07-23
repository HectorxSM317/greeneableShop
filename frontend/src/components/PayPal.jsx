import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPal() {
  const initialOptions = {
    // Genero las opciones para enviarle al CDN
    "client-id":
      "AbK57cNKcVW4hwleufnTUfSKr4dInm9Is9qDqwJcA45HCUyzRzrBjReT3OUUoPx57HJpKCDVUxDV7X1t",
    currency: "USD", //Establesco la moneda
    intent: "capture", //Estableco el metodos este autoriza la operacion y captura los fondos
  };

  const PayPalCheckOut = () => {
    return (
      <PayPalScriptProvider options={initialOptions}>
        {" "}
        {/*Inicializo el CDN*/}
        {/*Inicializo los botones*/}
        <PayPalButtons
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
          onCancel={onCancel}
        />
      </PayPalScriptProvider>
    );
  };

  return <div>PayPal</div>;
}

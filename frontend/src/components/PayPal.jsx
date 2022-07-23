import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function PayPal() {
  const cart = useSelector((store) => store.productsReducer.cart);
  console.log(cart);

  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    PayPalCheckOut();
  }, []);

  const initialOptions = {
    // Genero las opciones para enviarle al CDN
    "client-id":
      "AVwpM06a3dkz60RSWEtOm1SZnA2Pkcb3ieDCSWjIFu_2oFZ3y12Cpfm-eBnL6ewLGv4oN9f78GLEkrcZ",
    currency: "USD", //Establesco la moneda
    intent: "capture", //Estableco el metodos este autoriza la operacion y captura los fondos
  };

  //   export const getTotal =(basket) => {
  //     let Total = basket?.reduce((amount, item)=> item.price + amount, 0);

  //     return Total;

  // }

  let productsId = cart.map((items) => items._id);
  console.log(productsId);

  const createOrder = (data, actions) => {
    // Creo la orden de con los datos, esta puede ser general o con detalle de items
    console.log(data);
    return actions.order.create({
      purchase_units: [
        {
          description: "items",
          amount: {
            value: "1.99",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    // recibo el resultado de mi operacion
    console.log(data);
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      console.log("Capture result", details, JSON.stringify(details, null, 2)); //veo los datos en consola
      var transaction = details.purchase_units[0].payments.captures[0];
      alert(
        "Transaction " +
          transaction.status +
          ": " +
          transaction.id +
          "\n\nSee console for all available details"
      );
      console.log(details);
      setOrderID(transaction.id);
    });
  };

  const onCancel = (data) => {
    console.log("You have cancelled the payment!", data);
  };

  const onError = (data, actions) => {
    // Capturo error en caso de que exista
    setErrorMessage("An Error occured with your payment ");
  };

  const PayPalCheckOut = () => {
    return (
      <PayPalScriptProvider options={initialOptions}>
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

  return PayPalCheckOut();
}

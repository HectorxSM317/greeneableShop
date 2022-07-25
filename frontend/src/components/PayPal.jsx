import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import cartActions from "../redux/actions/cartActions";
import toast from "react-hot-toast";

export default function PayPal() {
  const cart = useSelector((store) => store.productsReducer.cart);
  const loggedUser = useSelector((store) => store.usersReducer.loggedUser);
  const dispatch = useDispatch();
  console.log(loggedUser);

  // console.log(cart);

  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [details, setDetails] = useState();

  let total = cart?.reduce(
    (amount, item) => item.price * item.quantity + amount,
    0
  );
  // console.log(total);

  useEffect(() => {
    PayPalCheckOut();
  }, [cart]);

  const initialOptions = {
    // Genero las opciones para enviarle al CDN
    "client-id":
      "AdLA2SfyCWBXYNZojrQTNKQEDMZOCsR83TruRwgbUQJoCczOqNqFuBbt8FPXcHbiOmMwFh2-qChTVRrF",
    currency: "USD", //Establesco la moneda
    intent: "capture", //Estableco el metodos este autoriza la operacion y captura los fondos
  };

  // console.log(productsId);
  console.log(details);

  function createSummary() {
    console.log("crear");

    let productsId = cart?.map((items) => items._id);
    console.log(productsId);

    const summary = {
      purchaseId: details.id,
      userId: loggedUser.id || loggedUser._id,
      payer: {
        address: details.payer.adress,
        email_address: details.payer.email_address,
        name: {
          given_name: details.payer.name.given_name,
          surname: details.payer.name.surname,
        },
        payer_id: details.payer.payer_id,
      },
      date: details.create_time,
      amount: total,
      status: details.status,
    };

    console.log(summary);
    dispatch(cartActions.createSummary(summary, productsId));
  }

  if (orderID) {
    createSummary();
  }

  const createOrder = (data, actions) => {
    // Creo la orden de con los datos, esta puede ser general o con detalle de items
    console.log(data);

    return actions.order.create({
      purchase_units: [
        {
          description: "items",
          amount: {
            value: total,
          },
        },
      ],
    });
  };
  // console.log(productsId);

  const onApprove = (data, actions) => {
    // recibo el resultado de mi operacion
    console.log(data);
    let aprovacion = actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
      console.log("Capture result", details, JSON.stringify(details, null, 2)); //veo los datos en consola
      var transaction = details.purchase_units[0].payments.captures[0];
      // localStorage.removeItem("carrito");
      toast.success(
        "Transaction " +
          transaction.status +
          ": " +
          transaction.id +
          "\n\nSee console for all available details"
      );
      setDetails(details);
      setOrderID(transaction.id);

      console.log("si se ejecuto");
    });

    return aprovacion;
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

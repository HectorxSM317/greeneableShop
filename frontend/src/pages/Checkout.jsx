import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const summary = useSelector((store) => store.cartReducer.summary);
  console.log(summary);

  return (
    <div className="flex w-full bg-lime-300 justify-center pt-20">
      <div className="h-screen flex flex-col items-center">
        <h1>Checkout</h1>
        <div className="flex gap-2">
          <p>Name: {summary.payer.name.given_name}</p>
          <p>LastName: {summary.payer.name.surname}</p>
        </div>
        <p>Email : {summary.payer.email_address}</p>
        <p>{summary.status}</p>
        <p>{summary.status}</p>
        <p>{summary.status}</p>
        <p>{summary.status}</p>
      </div>
    </div>
  );
}

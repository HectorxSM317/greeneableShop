import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PayPal from "../components/PayPal";
import ProductCart from "../components/ProductCart";
import productsActions from "../redux/actions/productsActions";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.productsReducer.cart);

  useEffect(() => {
    if (localStorage.getItem("product") !== null) {
      let productsLocal = JSON.parse(localStorage.getItem("product"));
      dispatch({ type: "CART_STORAGE", payload: productsLocal });
      console.log(productsLocal);
    }
  }, []);

  useEffect(() => {
    dispatch(productsActions.getProducts());
  }, []);

  function handleClearCart(e) {
    e.preventDefault();

    dispatch({
      type: "CLEAR_CART",
    });
    localStorage.removeItem("product");
  }

  function handleBuy(e) {
    e.preventDefault();

    dispatch(productsActions.payCart(cart));
  }

  console.log(cart);
  return (
    <div className="min-h-[60vh] flex items-center justify-center flex-col px-6">
      <div className="mt-[6rem]">
        <h3>Current products in your cart:</h3>
      </div>
      {cart?.length > 0 &&
        cart?.map((product, i) => <ProductCart product={product} key={i} />)}

      <div className="product-box w-[90%] flex row rounded-lg bg-slate-200 p-5 mt-6 min-w-[10rem] mx-2 justify-around items-center">
        <h4>
          Total:
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </h4>
        <button
          onClick={(e) => handleBuy(e)}
          className="p-3 bg-green-300 rounded-md w-[10rem] my-4 text-white"
        >
          Buy
        </button>

        <div style={{ width: "100%" }}>
          <PayPal />
          <button
            onClick={(e) => handleClearCart(e)}
            variant="contained"
            color="error"
            sx={{ marginTop: "1rem", fontSize: "large", width: "100%" }}
          >
            CLEAR
          </button>
        </div>

        {/* 
        <button
          onClick={(e) => handleClearCart(e)}
          className="p-3 bg-red-600 rounded-md w-[10rem] my-4 text-white"
        >
          Empty Cart
        </button>
        <PayPal /> */}
      </div>
    </div>
  );
}

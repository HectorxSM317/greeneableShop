import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PayPal from "../components/PayPal";
import ProductCart from "../components/ProductCart";
import productsActions from "../redux/actions/productsActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/productCart.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.productsReducer.cart);
  const [isValid, setIsValid] = useState(false);

  // useEffect(() => {
  //   dispatch(productsActions.getProducts());
  // }, [cart]);

  function handleClearCart(e) {
    dispatch({
      type: "CLEAR_CART",
    });
    localStorage.removeItem("product");
  }

  async function validateStock() {
    let res = await dispatch(productsActions.validateStock(cart));
    setIsValid(res);
  }

  console.log(isValid);
  return (
    <>
      {cart?.length > 0 ? (
        <div className="min-h-[60vh] flex items-center justify-center flex-col px-6">
          <div className="mt-[6rem]">
            <h3>Current products in your cart:</h3>
          </div>
          {cart?.length > 0 &&
            cart?.map((product, i) => (
              <ProductCart product={product} key={i} isValid={isValid} />
            ))}

          <div className="product-box w-[90%] flex row rounded-lg bg-slate-200 p-5 mt-6 min-w-[10rem] mx-2 justify-around items-center containerPriceClear">
            <h4 className="font-bold">
              Total Price:
              {cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
              USD
            </h4>

            <Button
              color="error"
              onClick={(e) => handleClearCart(e)}
              variant="outlined"
              startIcon={<DeleteIcon />}
            >
              CLEAR CART
            </Button>
          </div>
          <div className="product-box w-[90%] rounded-lg bg-slate-200 p-5 mt-6 min-w-[10rem] mx-2 my-5 buy">
            <div>
              <button
                type="button"
                onClick={validateStock}
                className="p-3 bg-green-300 rounded-md w-[10rem] my-4 text-white"
              >
                Comprobar stock
              </button>
            </div>
            <p className="my-2">Payment methods:</p>
            <div className="paypal">
              <PayPal isValid={isValid} />
            </div>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h3>Your cart is currently empty.</h3>
          <LinkRouter to="/products">
            <button className="color">
              Click here to start making it greeneable!
            </button>
          </LinkRouter>
        </div>
      )}
    </>
  );
}

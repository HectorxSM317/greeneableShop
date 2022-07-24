import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";

export default function Product({ product }) {
  const dispatch = useDispatch();

  function addToCart(product, e) {
    e.preventDefault();

    dispatch(productsActions.addToCart(product));
    // if(res.data.succes){
    //   setCart((prod) => [...prod, product]);
    // }else{
    //   hot toaste res.data.message
    // }
  }

  return (
    <div className="max-w-[15rem]">
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-[15rem] w-[15rem] m-1">
        <img
          className="w-full h-full object-cover"
          src={product.photo}
          alt={product.name}
        />
      </div>
      <div className="min-h-[12rem]">
        <div className="px-6 py-4">
          <p className="font-bold text-lg text-slate-900 mb-2">
            {product.name}
          </p>
          <p className="font-bold text-2xl">{product.price} USD</p>
        </div>
        <LinkRouter to={`/details/${product._id}`} className="bg-black">
          View more
        </LinkRouter>

        <button onClick={(e) => addToCart(product, e)}>
          <AddShoppingCartIcon />
        </button>
      </div>
    </div>
  );
}

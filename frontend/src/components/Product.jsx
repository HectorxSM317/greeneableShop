import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="max-w-[15rem]">
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-[15rem] w-[15rem] m-1">
        <img
          className="w-full h-full object-cover"
          src={product.photo}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="min-h-[12rem]">
        <div className="px-6 py-4">
          <p className="font-bold text-lg text-slate-900 mb-2">
            {product.name}
          </p>
          <p className="font-bold text-2xl">{product.price} USD</p>
        </div>
      </div>
      <LinkRouter
        to={`/details/${product._id}`}
        className="absolute center bottom-4 text-center pt-2 text-black font-bold rounded-lg h-10 w-32"
      >
        View more
      </LinkRouter>
    </div>
  );
}

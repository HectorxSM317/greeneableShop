import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import productsActions from "../redux/actions/productsActions";

export default function ProductCart({ product }) {
  console.log(product);
  const dispatch = useDispatch();

  function handleRemove(productId, e) {
    e.preventDefault();

    dispatch(productsActions.removeOneProduct(productId));
  }

  function handleRemoveAll(productId, e) {
    console.log(productId);
    e.preventDefault();

    dispatch({
      type: "REMOVE_ALL_FROM_CART",
      payload: productId,
    });
  }

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
    <div className="product-box flex row bg-slate-200 p-5 items-center min-w-[90%] my-2">
      <img className="max-h-[10rem]" src={product?.photo} alt="..." />
      <div className="flex flex-col m-4 grow">
        <h4 className="font-bold">{product?.name}</h4>
        <h3 className="font-bold">{product?.price}</h3>
        <h4>Description:</h4>
        <p>{product?.imageAlt}</p>
      </div>
      <div className="flex flex-col m-2">
        <p>Quantity:</p>
        <p>{product.quantity}</p>
        <p>total del producto:</p>
        <p>{product.quantity * product.price}</p>
        <button
          onClick={(e) => handleRemove(product?._id, e)}
          className="p-3 bg-red-600 rounded-md w-[10rem] text-white"
        >
          Remove from cart
        </button>
        <button onClick={(e) => addToCart(product, e)}>
          <AddShoppingCartIcon />
        </button>
        <button
          onClick={(e) => handleRemoveAll(product?._id, e)}
          className="p-3 bg-red-600 rounded-md w-[10rem] text-white"
        >
          Remove todo pero d euno from cart
        </button>
        {/* el min es uno, el máx la cantidad de stock */}
      </div>
    </div>
  );
}

import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
import "../styles/products.css";
import { IoIosEye } from "react-icons/io";
import { green } from "@mui/material/colors";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.productsReducer.cart);

  function addToCart(product, e) {
    e.preventDefault();
    let productAdded = cart.find((p) => p._id === product._id);
    if (productAdded?.quantity >= product.stock) return;

    dispatch(productsActions.addToCart(product));
    toast.success("Product added!");
  }

  return (
    <div className="relative card h-[20rem] bg-black">
      {product.stock <= 5 ? (
        product.stock === 0 ? (
          <div className="absolute -right-2 top-0 bg-gray-600/75 border rounded-sm p-1 pr-4">
            <Typography className="" color="error">
              Out of stock
            </Typography>
          </div>
        ) : (
          <div className="absolute -right-2 top-0 bg-gray-600/75 border rounded-sm p-1 pr-4">
            <Typography className="" color="error">
              Last units
            </Typography>
          </div>
        )
      ) : (
        <div className="absolute -right-2 top-0 bg-gray-600/75 border rounded-sm p-1 pr-4">
          <Typography className="" color="success">
            available products
          </Typography>
        </div>
      )}

      <div className="image">
        <img src={product.photo} alt="" />
      </div>
      <LinkRouter
        className="absolute top-28 -right-5"
        to={`/details/${product._id}`}
      >
        <Button className="viewMore bg-gray-900">
          <IoIosEye size={35} className="eyes" />
        </Button>
      </LinkRouter>
      <div className="content">
        <div className="info">
          <Typography
            className="text-white"
            gutterBottom
            variant="h6"
            component="div"
          >
            {product.name}
          </Typography>
        </div>
        <div className="moreInfo">
          <Typography variant="body2" className="text-white">
            {product.price} USD
          </Typography>
          <Button
            variant="contained"
            className="buttonAdd"
            onClick={(e) => product.stock > 0 && addToCart(product, e)}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

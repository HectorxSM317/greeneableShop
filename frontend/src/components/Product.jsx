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
import { BiInfoCircle } from "react-icons/bi";
import Rating from "@mui/material/Rating";
import { RiLeafFill } from "react-icons/ri";

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
      <div className="image">
        <img src={product.photo} alt="" />
      </div>
      <LinkRouter
        className="absolute top-36 -right-5"
        to={`/details/${product._id}`}
      >
        <Button className="viewMore bg-">
          <BiInfoCircle size={35} className="eyes" />
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
          <Rating
          readOnly
          name="sustainable"
          value={product?.sustainable}
          icon={<RiLeafFill fontSize="inherit" color="green" />}
          emptyIcon={<RiLeafFill fontSize="inherit" />}
        />
        </div>
        <div className="moreInfo">
          <Typography variant="body2" className="text-white font-bold">
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

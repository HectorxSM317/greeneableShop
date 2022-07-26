import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import toast from "react-hot-toast";
import "../styles/products.css";

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

  // let filter  = cart.filter ( item => item._id === product._id)
  // console.log(filter)

  return (
    <div className="card">
      <div className="image">
        <img src={product.photo} alt="" />
      </div>
      <div className="content">
        <div className="info">
          <Typography gutterBottom variant="h6" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="price">
            {product.price} USD
          </Typography>

          {product.stock <= 5 ? (
            <Typography color="error">Last units in stock!</Typography>
          ) : (
            <Typography color="green">Available stock</Typography>
          )}

          {/* <Typography color="green">
        {cart.filter((item)=>
          //  console.log(item.quantity)
          // <Typography>quantity:{ item.quantity}</Typography>
          item._id===product._id
        )}
          </Typography> */}
        </div>
        <div className="moreInfo">
          <LinkRouter to={`/details/${product._id}`}>
            <Button size="small" sx={{ color: "black" }}>
              View more
            </Button>
          </LinkRouter>
          <Button
            variant="contained"
            onClick={(e) => product.stock > 0 && addToCart(product, e)}
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

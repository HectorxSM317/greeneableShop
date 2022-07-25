import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import toast from "react-hot-toast";

export default function Product({ product }) {
  const dispatch = useDispatch();

  function addToCart(product, e) {
    e.preventDefault();

    dispatch(productsActions.addToCart(product));
    toast.success('Product added!')
  }

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
          <Typography variant="body2" color="text.secondary">
            {product.price} USD
          </Typography>
        </div>
        <div className="moreInfo">
          <LinkRouter to={`/details/${product._id}`}>
            <Button size="small" sx={{color: "black"}}>
              View more
            </Button>
          </LinkRouter>
          <Button variant="contained" onClick={(e) => addToCart(product, e)}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

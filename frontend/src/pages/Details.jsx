import React, { useEffect } from "react";
import CardDetails from "../components/CardDetails";
import "../styles/details.css";
import { useDispatch, useSelector } from "react-redux";
import productsActions from "../redux/actions/productsActions";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Link as LinkRouter } from 'react-router-dom'

export default function Details() {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  // console.log(product);

  useEffect(() => {
    dispatch(productsActions.getOneProduct(id)).then((res) =>
      setProduct(res?.data.response.product)
    );
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }} className="containerDetails">
        {product && <CardDetails product={product} />}
        <LinkRouter to={"/products/"}>
          <Button variant="contained">Back to Products</Button>
        </LinkRouter>
      </div>
    </>
  );
}

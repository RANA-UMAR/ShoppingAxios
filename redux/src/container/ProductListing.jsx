import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProduct } from "../redux/action/ActionProducts";

const ProductListing = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error occurs" + err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(product);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

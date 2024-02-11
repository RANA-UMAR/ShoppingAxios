import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,RemoveSelectedProduct } from "../redux/action/ActionProducts";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { title, price, category, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("error is occur" + err);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") {
      
      fetchProductDetail();
      return () => {
      dispatch(RemoveSelectedProduct());
    };
    }
  }, [productId],);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="flex justify-center items-center divide-x-2 divide-black ">
          <div className='w-64 h-56 flex items-center justify-center'>
            <img src={image} alt={title} className='w-32 object-cover rounded-md' />
          </div>
          <div className='text-center pl-6'>
            <h1 className='font-semibold text-lg'>{title}</h1>
            <h1 className='text-gray-600 text-sm'>{category}</h1>
            <h1 className='text-green-600 font-semibold text-lg'>${price}</h1>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

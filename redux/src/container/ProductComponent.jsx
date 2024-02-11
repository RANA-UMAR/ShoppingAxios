import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderProducts = products.map((elem, id) => (
    <div key={id} className='border-2 border-slate-400 p-4 flex flex-col items-center mx-auto space-y-2 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
    <Link to={`/product/${elem.id}`}>
      <div className='w-64 h-56 flex items-center justify-center'>
        <img src={elem.image} alt={elem.title} className='w-32 object-cover rounded-md' />
      </div>
      <div className='text-center'>
        <hr className='border-t border-slate-400 my-2' />
        <h1 className='font-semibold text-lg'>{elem.title}</h1>
        <h1 className='text-gray-600 text-sm'>{elem.category}</h1>
        <h1 className='text-green-600 font-semibold text-lg'>${elem.price}</h1>
      </div>
      </Link>
    </div>
  ));

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4'>
      {renderProducts}
    </div>
  );
};

export default ProductComponent;

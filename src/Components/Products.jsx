import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  console.log(products);
  return (
    <div className='py-10 justify-center items-center'>
      <div className='flex flex-col items-center gap-4 mt-1'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping EveryDay</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px] text-gray-700 text-center'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, rerum eaque accusantium nihil, minus ipsum possimus doloremque ratione ipsam praesentium laborum atque sunt dicta velit quaerat consectetur error dolorem nisi.
        </p>
      </div>
      <div className='max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10'>
        {products.map((item, id) => (
          <ProductCard product={item} key={id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Products;

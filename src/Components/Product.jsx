import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addtocart } from '../redux/bazarSlice';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const [details, setDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location]);

  const handleAddToCart = () => {
    dispatch(addtocart({ ...details, quantity: quantity }));
    setQuantity(1);
    toast.success('Product added to cart!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        {details && (
          <div>
            <img className='w-auto h-auto' src={details.image} alt="productImg" />
            <div className='absolute top-4 right-0'>
              {details.isNew && (
                <p className='bg-black text-white font-semibold font-bold px-8 py-1'>
                  Sale
                </p>
              )}
            </div>
          </div>
        )}

        <div className='w-3/5 flex flex-col justify-center gap-12'>
          {details && (
            <div>
              <h2 className='text-4xl font-semibold'>{details.title}</h2>
              <div>
                <p className='link-through font-base text-gray-500'>{details.oldPrice}</p>
                <p className='text-2xl font-base text-gray-500'>{details.price}</p>
              </div>
            </div>
          )}

          <div className='flex  items-center gap-2 text-base'>
            <div className='flex'>
              {[...Array(5)].map((_, index) => (
                <MdOutlineStar key={index} />
              ))}
            </div>
            <p>(1 Customer Review)</p>
          </div>
          {details && <p className='text-base text-gray-500 mt-3'>{details.description}</p>}

          <div>
            <p className='text-sm font-bold'>Quantity</p>
            <div className='flex items-center gap-4 text-sm mt-2 font-semibold'>
              <button className='border border-black px-4 py-2 rounded-md' onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button className='border border-black px-4 py-2 rounded-md' onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div className='mt-3 rounded-full'>
            <button onClick={handleAddToCart} className='bg-black rounded rounded-full text-white py-3 px-6 active:bg-gray-800'>Add to Cart</button>
          </div>

          <div className='flex'>
            <p className='text-xl font-semibold'>Category : </p>
            {details && <p className='text-xl text-black'>{details.category}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

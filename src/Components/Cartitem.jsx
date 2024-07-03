import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { incrementQuantity, decrementQuantity, deleteItem, resetCart } from '../redux/bazarSlice'; // Import resetCart action
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

const Cartitem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const dispatch = useDispatch();

  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(deleteItem(itemId)); // Corrected action creator
    toast.success("Item removed from the cart");
  };

  const handleResetCart = () => {
    dispatch(resetCart()); // Dispatch resetCart action to clear the cart
    toast.success("Cart has been reset");
  };

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2 className='font-bold text-2xl'>Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div key={item._id} className='flex items-center justify-between gap-5 mt-5'>
            <div className='flex items-center gap-2'>
              <MdOutlineClose 
                className='text-xl text-gray-400 hover:text-red-800 cursor-pointer duration-300'
                onClick={() => handleRemoveItem(item._id)} // Call handleRemoveItem on close icon click
              />
              <img className='w-32 h-32 object-cover' src={item.image} alt='' />
            </div>
            <h2 className='w-52'>{item.title}</h2>
            <div className='flex items-center'>
              <button 
                onClick={() => handleDecrement(item._id)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-md hover:bg-gray-300 focus:outline-none"
              >
                -
              </button>
              <p className="px-3 py-1 bg-gray-100">{item.quantity}</p>
              <button 
                onClick={() => handleIncrement(item._id)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-md hover:bg-gray-300 focus:outline-none"
              >
                +
              </button>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
        <div className="flex justify-between mt-5">
          <button onClick={handleResetCart} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none">Reset Cart</button>
          <div>
          <Link to='/'>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
              <HiOutlineArrowLeft className="inline-block mr-2" /> Back to Home
            </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;

import React from 'react';
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {
  return (
    <button className='relative p-3'>
      <FaCartShopping className='text-xl text-white'/>
      <div className='w-4 h-4 bg-red-600
        rounded-full absolute top-0 right-0 flex
        items-center justify-center text-xs'>
        9 {/* Número Hardcoded */}
      </div>
    </button>
  );
};

export default CartWidget;

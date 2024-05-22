import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6"

const CartWidget = ({ cartItems }) => {
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className="relative">
      <button className='relative p-3' onClick={toggleCart}>
        <FaCartShopping className='text-xl text-white'/>
        <div className='w-4 h-4 bg-red-600 rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
          {cartItems.length}
        </div>
      </button>
      {showCart && (
        <div className="absolute bg-white top-14 right-0 border border-gray-300 p-4 shadow-lg w-64">
          <h2 className="text-base font-bold mb-4">Carrito</h2>
          {cartItems.length === 0 ? (
            <p>No hay elementos en el carrito.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.img} alt={item.title} className="w-10 h-10 mr-2" />
                  <span>{`$${item.price}`}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default CartWidget
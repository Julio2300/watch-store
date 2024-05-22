import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from 'react-icons/io5'
import CartWidget from '../CartWidget'

const MenuLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Casio", link: "/products/casio" },
  { id: 3, name: "Nixon", link: "/products/nixon" },
  { id: 4, name: "Swatch", link: "/products/swatch" }
]

const Navbar = ({ cartItems }) => {
  return (
    <div className='shadow-md bg-primary-blue'>
      <div className='py-3'>
        <div className='container flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <Link to="/" className='text-white font-bold tracking-widest text-2xl sm:text-3xl uppercase p-2'>
              TimeSquare
            </Link>
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-4'>
                {MenuLinks.map(data => (
                  <li className='text-white' key={data.id}>
                    <Link className='text-base inline-block px-4 font-semibold hover:text-lg uppercase' to={data.link}>
                      {data.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='flex justify-between items-center gap-4'>
            <div className='relative sm:block'>
              <input type='text' placeholder='Search' className='search-bar' />
              <IoSearch className='text-xl text-primary-blue absolute top-1/2 -translate-y-1/2 right-3' />
            </div>
            <CartWidget cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
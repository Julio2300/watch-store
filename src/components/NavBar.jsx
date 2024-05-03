import React from 'react'
import { IoSearch } from "react-icons/io5"
import { FaCartShopping } from "react-icons/fa6"
import CartWidget from './CartWidget'

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "New in",
        link: "/#",
    },
    {
        id: 3,
        name: "Casio",
        link: "/#",
    },
    {
        id: 4,
        name: "Mistral",
        link: "/#",
    },
    {
        id: 5,
        name: "Prune",
        link: "/#",
    }
]

const Navbar = ({ handleOrderPopup }) => {
    return (
        <div className='shadow-md bg-primary-blue'>
            <div className='py-3 '>
                <div className='container flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <a href='#'
                            className='text-white font-bold tracking-widest text-2xl sm:text-3xl uppercase'>
                            TimeSquare
                        </a>
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data, index) => (
                                    <li className='text-white' key={index}>
                                        <a className='text-base inline-block px-4 font-semibold hover:text-lg uppercase'
                                            href={data.link}>{data.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative sm:block'>
                            <input type='text' placeholder='Search'
                                className='search-bar'
                            />
                            <IoSearch className='text-xl text-primary-blue absolute top-1/2 -translate-y-1/2 right-3' />
                        </div>
                        <CartWidget />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar

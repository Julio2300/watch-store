import React from 'react'
import { IoMdCloseCircle } from "react-icons/io"

const ItemListContainer = ({ orderPopup, handleOrderPopup, greeting }) => {
    return (
        <>
            {
                orderPopup && (
                    <div>
                        <div className='h-screen w-screen fixed top-0 left-0 bg-black-50 z-50 backdrop-blur-sm'>
                            <div className='w-80 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white-100'>
                                <div className='flex items-center justify-between'>
                                    <h1>¡Bienvenido a TimeSquare!</h1>
                                    <div>
                                        <IoMdCloseCircle
                                            onClick={handleOrderPopup}
                                            className='text-2xl cursor-pointer' />
                                    </div>
                                </div>
                                <div>
                                    <p>{greeting}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ItemListContainer

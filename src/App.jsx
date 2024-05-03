import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  const [orderPopup, setOrderPopup] = React.useState(true);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div className='bg-white-100'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <ItemListContainer
        orderPopup={orderPopup}
        handleOrderPopup={handleOrderPopup}
        greeting="Encuentra tu estilo en cada segundo." 
      />
    </div>
  );
}

export default App

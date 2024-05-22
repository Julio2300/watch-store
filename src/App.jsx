import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import ProductDetail from './components/ProductDetail'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems([...cartItems, item])
  };

  return (
    <Router>
      <div className='bg-white-100'>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:brand" element={<Products addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <ItemListContainer greeting="Encuentra tu estilo en cada segundo." />
    <Hero />
    <TopVentas />
  </>
);

const TopVentas = () => (
  <div className='container bg-blue-gray p-5'>
    <h1 className='text-5xl font-bold text-center py-10'>Top Ventas</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center p-10 my-10'>
      {topVentas.map(product => (
        <div key={product.id} className='rounded-2xl bg-blue-gray hover:bg-blue-light hover:text-white relative shadow-xl duration-300 group max-w-[300px] py-[200px]'>
          <div className='h-[300px]'>
            <img src={product.img} alt={product.title} className='max-w-[300px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
          </div>
          <div className='p-4 text-center'>
            <h1 className='text-xl font-bold uppercase'>{product.title}</h1>
            <button onClick={() => addToCart(product)} className='bg-primary-blue to-white hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
              Order Now!
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const topVentas = [
  { id: 1, img: "https://static.swatch.com/images/product/SUON134/sa200/SUON134_sa200_er005.png", title: "Casio", description: "Descripción Casio" },
  { id: 2, img: "https://static.swatch.com/images/product/YCS580G/sa200/YCS580G_sa200_er005.png", title: "Nixon", description: "Descripción Nixon" },
  { id: 3, img: "https://static.swatch.com/images/product/YCS580G/sa200/YCS580G_sa200_er005.png", title: "Swatch", description: "Descripción Swatch" },
  { id: 4, img: "https://static.swatch.com/images/product/SUON136/sa200/SUON136_sa200_er005.png", title: "Nixon", description: "Descripción Nixon" },
  { id: 5, img: "https://static.swatch.com/images/product/SS08P102/sa200/SS08P102_sa200_er005.png", title: "Casio", description: "Descripción Casio" },
  { id: 6, img: "https://static.swatch.com/images/product/SB07S100G/sa200/SB07S100G_sa200_er005.png", title: "Swatch", description: "Descripción Swatch" }
];

const NotFound = () => (
  <div className='text-center py-20'>
    <h1 className='text-5xl font-bold'>Página no encontrada</h1>
    <p className='text-xl mt-4'>Lo sentimos, la página que estás buscando no existe.</p>
    <Link to="/" className='mt-4 inline-block bg-primary-blue text-white py-2 px-4 rounded-full'>
      Volver al inicio
    </Link>
  </div>
);

export default App
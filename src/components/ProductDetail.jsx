import React from 'react'
import { useParams } from 'react-router-dom'


const ProductsData = {
  casio: [
    { id: 1, 
      img: "https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/D/DW/dwh/dw-h5600-1a2/assets/DW-H5600-1A2.png.transform/main-visual-pc/image.png", 
      title: "Casio 1", 
      description: "Casio 1", 
      price: 1 },
    { id: 2, 
      img: "https://static.swatch.com/images/product/GW194/sa200/GW194_sa200_er005.png", 
      title: "Casio 2", 
      description: "Casio 2", 
      price: 1 }
  ],
  nixon: [
    { id: 3, 
      img: "https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/D/DW/dwh/dw-h5600-1a2/assets/DW-H5600-1A2.png.transform/main-visual-pc/image.png", 
      title: "Nixon 1", 
      description: "Nixon 1", 
      price: 1 }
  ],
  swatch: [
    { id: 4, 
      img: "https://static.swatch.com/images/product/GP156/sa200/GP156_sa200_er005.png", 
      title: "Swatch 1", 
      description: "Swatch 1", 
      price: 1 }
  ]
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = Object.values(ProductsData).flat().find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className='container text-center py-20'>
      <h1 className='text-5xl font-bold mb-10'>{product.title}</h1>
      <img src={product.img} alt={product.title} className='mx-auto mb-10 w-1/2' />
      <p className='text-xl mb-4'>{product.description}</p>
      <p className='text-2xl font-bold mb-4'>Precio: ${product.price}</p>
      <button className='bg-primary-blue to-white hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
        Order Now!
      </button>
    </div>
  )
}

export default ProductDetail
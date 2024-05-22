import React from 'react'
import { useParams } from 'react-router-dom'

const ProductsData = {
  casio: [
    { id: 1, img: "https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/D/DW/dwh/dw-h5600mb-8/assets/DW-H5600MB-8.png.transform/main-visual-pc/image.png", title: "G-SQUAD DW-H5600MB-8", description: "Tome el control de sus entrenamientos y agréguele estilo a su vida diaria con el DW-H5600, de la línea de relojes resistente y deportiva G-SQUAD de G-SHOCK.", price: 300 },
    { id: 2, img: "https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/B/BG/BGD/bgd-565gs-1/assets/BGD-565GS-1.png.transform/main-visual-pc/image.png", title: "BGD-565", description: "El estilo icónico de BABY-G se adentra en la cultura del skateboarding: un reloj casual para una vida activa.", price: 150 },
    { id: 3, img: "https://www.casio.com/content/dam/casio/product-info/locales/latin/es-ar/timepiece/product/watch/L/LT/LTP/ltp-b140d-1av/assets/LTP-B140D-1AV.png.transform/main-visual-pc/image.png", title: "LTP-B140D-1AV", description: "Una versión cuadrada y audaz del clásico reloj analógico de metal.", price: 200 }
  ],
  nixon: [
    {
      id: 4,
      img: "https://acdn.mitiendanube.com/stores/001/112/511/products/a1051041-5-908c83aaaa1e563b5f17128679348695-640-0.webp", title: "Ripper Black Black", description: "Nuestro reloj digital más nuevo, Ripper Black Black es todo lo que necesitas y nada que no necesites. Presenta una nueva correa de reloj, que solo se encuentra el Ripper, se mete debajo de sí misma para que quede cómoda y no se caiga ni siquiera de la muñeca más pequeña.", price: 200
    },
    {
      id: 5,
      img: "https://acdn.mitiendanube.com/stores/001/112/511/products/a1180760-regulus-all-black-red-11-a73c85b91442fa892716188557996929-640-0.webp", title: "Regulus All Black / Red", description: "Ready for anything. Desarrollado en colaboración con las Fuerzas Especiales del Ejército de los EE. UU., el Regulus es sin duda alguna, el reloj más robusto que hayamos fabricado jamás.", price: 150
    },
    {
      id: 6,
      img: "https://acdn.mitiendanube.com/stores/001/112/511/products/diseno-sin-titulo-51-da04b20919c04c63ba16528205131855-640-0.webp",
      title: "Staple, Black / Aqua Positive", description: "El Staple Black es un reloj fabricado con plástico de un solo uso. Ahora fabricado con plásticos oceánicos reciclados #tide, el Staple es tan elegante como siempre, pero con una misión ecológica...", price: 300
    },
  ],
  swatch: [
    {
      id: 7,
      img: "https://static.swatch.com/images/product/SO34P700/sa200/SO34P700_sa200_er005.png",
      title: "WHAT IF…ROSE?",
      description: "La caja cuadrada del reloj BIOCERAMIC color rosa incluye un cristal de origen biológico de borde a borde que ofrece una vista lateral de los índices blancos estampados del reloj. La esfera cuadrada incluye agujas plateadas que brillan en la oscuridad y la ventana de la fecha a las 3 en punto. La esfera se complementa con una correa integrada de origen biológico con hebilla BIOCERAMIC. La tapa de la pila estampada en el reverso muestra una vista frontal del reloj.", price: 300
    },
    {
      id: 8,
      img: "https://static.swatch.com/images/product/SUSG408/sa200/SUSG408_sa200_er005.png",
      title: "NEON FLASH ARROW", description: "Este reloj cronógrafo de colores neón se inspira en un icono Swatch CHRONO de los 90: FLASH ARROW (SCL100). La esfera multicolor con escala taquimétrica incluye las manecillas de las horas y los minutos en color negro con efecto de brillo en la oscuridad, un segundero amarillo y la ventana del día a las 3 en punto. Incluye una caja verde mate transparente con bisel a juego. La correa rosa estructurada está adornada con trabillas transparentes en colores amarillo y azul mate contrastantes, y una hebilla verde mate transparente.", price: 360
    },
    {
      id: 9,
      img: "https://static.swatch.com/images/product/SS08K119/sa200/SS08K119_sa200_er005.png",
      title: "NEON HOT RACER", description: "Este reloj retro ultrafino se inspira en un modelo de la colección Swatch de los 80: HOT RACER (LK115). La vibrante esfera multicolor incluye las manecillas de las horas y los minutos de color verde en una caja transparente brillante de origen biológico con cristal de origen biológico. La correa inferior transparente de color verde mate y la correa superior azul incluyen un estampado multicolor que se complementa con la trabilla naranja y la hebilla verde.", price: 200
    }
  ]
}

const Products = ({ addToCart }) => {
  const { brand } = useParams();

  if (!brand || !ProductsData[brand]) {
    return <div>Marca no encontrada</div>;
  }

  const products = ProductsData[brand];

  return (
    <div className='container bg-blue-gray'>
      <h1 className='text-5xl font-bold text-center py-10'>{brand.toUpperCase()}</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center p-10 my-10'>
        {products.map(product => (
          <div key={product.id} className='rounded-2xl bg-blue-gray hover:bg-blue-light hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
            <div className='h-[300px]'>
              <img src={product.img} alt={product.title} className='max-w-[300px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
            </div>
            <div className='p-4 text-center'>
              <h1 className='text-xl font-bold uppercase'>{product.title}</h1>
              <p className='text-lg mb-2'>{product.description}</p>
              <p className='text-xl font-bold mb-4'>Precio: ${product.price}</p>
              <button onClick={() => addToCart(product)} className='bg-primary-blue to-white hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>
                Order Now!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
import React from 'react'
import Slider from 'react-slick'

const ImageList = [
    {
        id: 1,
        img: "https://i.pinimg.com/originals/7f/6d/6e/7f6d6e6a231d14872129c1f3a12dcfab.jpg",
        title: "Image 1",
        description: "This is the first image",
    },
    {
        id: 2,
        img: "https://i.pinimg.com/originals/43/f6/4b/43f64bfae20bff75bac4dcc4c30f7386.jpg",
        title: "Image 2",
        description: "This is the second image",
    },
    {
        id: 3,
        img: "https://i.pinimg.com/564x/45/23/03/452303feef926cede63aa6dc43e9dbac.jpg",
        title: "Image 3",
        description: "This is the third image",
    }
]

const Hero = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 400,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
    return (
        <div className='relative overflow-hidden min-h-[550px]
        sm:min-h-[650px] bg-white flex justify-center items-center'>
            <div className=''></div>
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                <div className='flex flex-col justify-center gap pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold py-2'>{data.title}</h1>
                                    <p className='text-sm py-2'>{data.description}</p>
                                    <div className='py-2'>
                                        <button className='bg-primary-blue to-white hover:scale-105
                                duration-200 text-white py-2 px-4 rounded-full'>
                                            Order Now!
                                        </button>
                                    </div>
                                </div>
                                <div className='order-1 sm:order-2'>
                                    <div className='relative z-10'>
                                        <img src={data.img}
                                            alt=''
                                            className='w-[500px] h-[500px] sm:scale-150
                                object-contain mx-auto' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default Hero
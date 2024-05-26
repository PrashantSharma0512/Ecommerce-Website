import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductSlider = () => {
    const products = [
        { name: 'Product 1', price: '29.99', image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { name: 'Product 2', price: '39.99', image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { name: 'Product 3', price: '49.99', image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { name: 'Product 4', price: '59.99', image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { name: 'Product 5', price: '69.99', image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { name: 'Product 6', price: '79.99', image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="px-2">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;

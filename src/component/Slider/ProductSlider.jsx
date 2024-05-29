// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const ProductSlider = () => {
//     const products = [
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//         { image: 'https://th.bing.com/th/id/OIP.rnxANnux46BCq7BhaN8YcQHaE8?w=197&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
//     ];
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 8,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//             }
//         ]
//     };

//     return (
//         <div className="container">
//             <Slider {...settings}>
//                 {products.map((product, index) => (
//                     <div key={index} className="">
//                         <div className="bg-white  rounded-lg shadow-lg p-1">
//                             <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded" />
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ProductSlider;

// src/components/ProductListing.js
import React from 'react';

const ProductListing = () => {
  // Sample product data (you can fetch this from an API)
  const products = [
    { id: 1, name: 'Chakra Reiki Bracelet', price: '$39.99', isNew: true },
    { id: 2, name: 'Chakra Reiki Bracelet', price: '$39.99', isNew: true },
    { id: 3, name: 'Chakra Reiki Bracelet', price: '$39.99', isNew: true },
    { id: 4, name: 'Chakra Reiki Bracelet', price: '$39.99', isNew: true },
    { id: 5, name: 'Chakra Reiki Bracelet', price: '$39.99', isNew: true },
    { id: 6, name: 'Chakra Reiki Bracelet', price: '$39.99', isNew: true },
    // Add more product data...
  ];

  return (
    <div className="bg-gray-100 p-8">
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow-md flex flex-col items-center"
          >
            {product.isNew && (
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full mb-2">
                NEW
              </span>
            )}
            <img
              src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D"
              alt={product.name}
              className="w-32 h-32 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;

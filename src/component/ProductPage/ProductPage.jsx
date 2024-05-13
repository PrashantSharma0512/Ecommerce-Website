import React from 'react';

const ProductPage = () => {
  // Sample product data
  const product = {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 49.99,
    description: "Experience premium sound quality with our wireless Bluetooth headphones. Enjoy crisp highs and deep bass without the hassle of wires.",
    imageUrl: "https://th.bing.com/th?id=OPAC.TO9pTmAuPNUntA474C474&w=290&h=340&c=17&o=6&dpr=1.3&pid=21.1",
    features: [
      "Wireless connectivity via Bluetooth 5.0",
      "High-fidelity sound with noise cancellation",
      "Comfortable over-ear design for extended wear",
      "Built-in microphone for hands-free calling",
      "Long-lasting battery life - up to 20 hours"
    ]
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="w-full object-cover md:w-48" src={product.imageUrl} alt={product.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
            <p className="mt-2 text-gray-600">${product.price.toFixed(2)}</p>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <ul className="mt-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-4 h-4 fill-current text-gray-700 mr-2" viewBox="0 0 24 24">
                    <path d="M20 11.09V9c0-4.42-3.58-8-8-8s-8 3.58-8 8v2.09C4.61 11.25 4 12.19 4 13v6c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1v-6c0-.81-.61-1.75-1-1.91zM12 20H6v-1h6v1zm6-3H6v-1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v1zm1-4H5V9c0-3.31 2.69-6 6-6s6 2.69 6 6v4z"/>
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="flex flex-col md:flex-row justify-between items-center bg-white rounded-lg shadow-lg p-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img className="rounded-lg" src="https://plus.unsplash.com/premium_photo-1684785617085-3a875d81920f?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Us" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">Welcome to our ecommerce store! We're dedicated to providing you with the best products and shopping experience.</p>
            <p className="text-lg mb-4">Our mission is to offer a wide range of high-quality products at competitive prices, all conveniently available online.</p>
            <p className="text-lg mb-4">At our store, you'll find everything you need, from electronics and gadgets to fashion and home decor. We work with trusted suppliers and brands to ensure that every item meets our standards of excellence.</p>
            <p className="text-lg">Customer satisfaction is our top priority. If you have any questions or concerns, please don't hesitate to contact us. Our friendly customer service team is here to help!</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="text-lg">Thank regard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

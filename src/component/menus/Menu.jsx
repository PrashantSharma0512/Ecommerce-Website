import React from 'react'
import { Link } from 'react-router-dom'
import { BiShoppingBag } from 'react-icons/bi'
import { GiShoppingCart } from 'react-icons/gi'
function Menu({ name, descp, img, price }) {

  return (
    <div className="bg-white border border-zinc-400  rounded-lg shadow-md p-3 w-[20rem] h-[25rem] relative ">
      <img src={img} loading='lazy' className="w-full h-1/2 rounded-md bg-contain hover:scale-110 hover:shadow-zinc-700 hover:shadow-xl " />
      <h3 className="text-green-600 font-bold mt-2">{name}</h3>
      <p className="text-gray-600 overflow-hidden">{descp}</p>
      <p className="text-blue-950 overflow-hidden font-bold">₹{price}</p>
      &nbsp;
      <div className=' w-full'>
        <button className="flex h-10 w-full items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800 mb-1 rounded">
          <Link to='gifts/for-her' className='flex h-10 w-full items-center justify-center'>
            <BiShoppingBag size={25} />
            Add to cart
          </Link>
        </button>
        <button className="flex h-10 w-full rounded items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300 hover:opacity-80">
          <Link to='/detailedProduct' className="flex">
            <GiShoppingCart size={25} />
            BUY
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Menu

import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai'
function Menu({ name, descp, img, onClick, price }) {

  return (
    <div className="bg-white border border-zinc-400  rounded-lg shadow-md p-3 w-[20rem] h-[25rem] relative ">
      <img src={img} className="w-full h-1/2 rounded-md bg-contain hover:scale-110 hover:shadow-zinc-700 hover:shadow-xl " />
      <h3 className="text-green-600 font-bold mt-2">{name}</h3>
      <p className="text-gray-600 overflow-hidden">{descp}</p>
      <p className="text-blue-950 overflow-hidden font-bold">₹{price}</p>
      &nbsp;
      <div className=' w-full'>
      <button className="flex h-10 w-full items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800 mb-1">
        <BiShoppingBag size={25} />
        Add to cart
      </button>
      <button className="flex h-10 w-full items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
        <AiOutlineHeart size={25} />
        Wishlist
      </button>
      </div>
    </div>
  )
}

export default Menu

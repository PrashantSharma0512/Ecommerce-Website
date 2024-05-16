import React from 'react'
function Menu({name,descp,img,onClick}) {
  return (
   <div className="bg-white border border-zinc-400 shadow-md rounded-lg shadow-md p-4 w-64 h-72 relative">
      <img src={img}  className="w-full h-1/2 rounded-md bg-contain" />
      <h3 className="text-green-600 font-bold mt-2">{name}</h3>
      <p className="text-gray-600 overflow-hidden">{descp}</p>
      {/* <p className="text-green-600 font-bold mt-2">{name}</p> */}
      <button className="bg-blue-800 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 absolute bottom-4 left-3"
      onClick={onClick}
      >
        Buy Now
      </button>
    </div>
  )
}

export default Menu

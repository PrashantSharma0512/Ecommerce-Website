import React from 'react'
import { NavLink } from 'react-router-dom'
import { TfiReload } from "react-icons/tfi";
import error from '../assets/404.svg'
const Error = () => {
  return (
    <div className='w-screen h-screen'>
      <img src={error} alt="" className='w-full h-[70vh]' />
      <h1 className='text-5xl text-center font-[gilroy] '>Try again Later</h1>
        <NavLink to='' className='flex justify-center mt-4'>
        <button className='bg-zinc-500 p-2 text-white  rounded'><TfiReload size={40} color='white'/></button>
        </NavLink>
      
    </div>
  )
}

export default Error

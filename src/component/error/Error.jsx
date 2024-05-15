import React from 'react'
import { NavLink } from 'react-router-dom'
import { TfiReload } from "react-icons/tfi";
import error from '../assets/404.svg'
const Error = () => {
  return (
    <div className='w-screen'>
      <img src={error} alt="" className='w-full h-[50vh]' />
      <h1 className='text-5xl text-center font-[gilroy] '>Try again Later</h1>
        <NavLink to='' className='flex justify-center mt-4'>
        <button className='bg-zinc-500 p-3 text-white  rounded-full'>Back to Home</button>
        </NavLink>
      
    </div>
  )
}

export default Error

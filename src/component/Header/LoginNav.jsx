import React from 'react'
import { Link } from 'react-router-dom'
function LoginNav() {
  return (
    <div className='flex justify-around border border-black p-4 text-white bg-zinc-900 max-sm:hidden'>
      <div>Welcome to ChachaBucks</div>
      <div className='flex gap-4'>
        <p className='border-r-[1px] border-white pr-4'>Hello Guest</p>
        <button className='hover:underline border-r-[1px] border-white pr-4'><Link to='/login'  >Sign In</Link></button>
        <button className='hover:underline border-r-[1px] border-white pr-4'><Link to='/signup'>Create New Account</Link></button>
      </div>
    </div>
  )
}

export default LoginNav

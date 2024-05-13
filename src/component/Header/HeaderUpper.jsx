import React, { useState } from 'react'
import {Link} from 'react-router-dom'
// import Logo from '../assets/logo.svg'
import Logo1 from '../assets/logo1.svg'
import { RiShoppingCartFill } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import DrawerIcon from './DrawerIcon';
function HeaderUpper() {
  const [mobile,setMobile]= useState(true);
  const makeTrue= () =>{
   setMobile(!mobile)
  }

  let loginPage = () => {

  }
  return (
    <div className='flex justify-between ml-24 max-sm:ml-0  p-2 max-md:flex max-md:justify-center'>
      <Link to='/' >
      <img
         src={Logo1}
          className="w-48 max-sm:w-32"
          alt=""
        />
      </Link>
      <div className='flex items-center gap-16 justify-around max-sm:absolute max-sm:right-0'>
        {mobile?<HiOutlineSearch className='max-sm:absolute  max-sm:right-14 text-4xl cursor-pointer' onClick={makeTrue}/>:<div className=' flex justify-center items-center max-sm:absolute max-sm:top-20 max-sm:right-2'> <input type="search" name="" id="" placeholder='Search......' className='w-96 h-8 border-red border-solid border p-3 focus:border-zinc-600  '
        
       /><ImCross className='text-lg cursor-pointer' onClick={makeTrue}/></div>}
        <RiShoppingCartFill size={50} onClick={loginPage}  className='max-lg:hidden cursor-pointer'/>
        <DrawerIcon className=''/>
      </div>
    </div >
  )
}

export default HeaderUpper

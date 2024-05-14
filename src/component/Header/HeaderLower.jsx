import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import arrow from '../assets/arrow.svg'
import Navlink from './Linkslist';
import { GiHamburgerMenu } from "react-icons/gi";
function HeaderLower() {
    const [isGiftsMenuOpen, setIsGiftsMenuOpen] = useState(false);
    const [isRemedies, setIsRemedies] = useState(false);
    const [isShop, setIsShop] = useState(false);
    const [isHealingStone, setIsHealingStone] = useState(false);
    const [isTraining, setIstraining] = useState(false);
    const [isOurServices, setIsOurServices] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 

    return (<>
        
        <nav className='w-full h-14 shadow-lg border-t-2 border-gray-400 max-sm:h-0 '>
            <ul  className={`lg:flex lg:justify-around pt-4 items-center overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <li>
                    <NavLink
                        to="/"
                        activeClassName="text-orange-700"
                        className={(isActive) => ` block py-2 pr-4 pl-3 ${isActive ? "bg-orange" : "text-gray-700"}duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold`}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        activeClassName="text-orange-700"
                        className={(isActive) => ` ${isActive ? "bg-orange" : "text-gray-700"}block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold`}
                    >
                        About
                    </NavLink>
                </li>
                
                <li
                    onMouseEnter={() => setIsGiftsMenuOpen(true)}
                    onMouseLeave={() => setIsGiftsMenuOpen(false)}
                >
                    <NavLink
                        to="/gifts"
                        activeClassName="text-orange-700"
                        className=" relative block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        <div className='flex '>
                            Gifts
                            <img src={arrow} alt=""/>
                        </div>
                    </NavLink>
                    {/* Submenu */}
                    {isGiftsMenuOpen && (
                        <ul className="absolute pt-1 border border-t-blue-700 border-t-4  text-center  w-40 h-1/3    bg-white   overflow-x-hidden overflow-y-auto z-10 rounded-b-lg">
                            <li>
                                <NavLink to="/gifts/for-her" className="block py-2 hover:bg-blue-800 hover:text-white"> Logo</NavLink>
                            </li>
                           
                            {/* <Navlink /> is pe kaam karna baki h abhi ---> this is a component called navlist  */}

                            {/* Add more submenu items as needed */}
                        </ul>
                    )
                    }
                </li>


                {/* Add your dropdown content inside NavLink */}
                <li
                    onMouseEnter={() => setIsRemedies(true)}
                    onMouseLeave={() => setIsRemedies(false)}
                >
                    <NavLink
                        to="/remedies"
                        activeClassName="text-orange-700"
                        className="relative block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        <div className='flex '>Remedies
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    {/* Submenu */}
                    {isRemedies && (
                        <ul className="absolute pt-1  w-40   h-1/3 border border-t-blue-700 border-t-4 bg-white overflow-scroll overflow-x-hidden  z-10 rounded-b-lg">
                            <li>
                                <NavLink to="/gifts/for-her" className="block py-2 hover:bg-blue-800 hover:text-white">For Her</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gifts/for-him" className="block py-2 hover:bg-blue-800 hover:text-white">For Him</NavLink>
                            </li>
                            {/* <Navlink />  */}
                            {/* Add more submenu items as needed */}
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => setIsShop(true)}
                    onMouseLeave={() => setIsShop(false)}
                >
                    <NavLink
                        to="/shop"
                        activeClassName="text-orange-700"
                        className="relative block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        <div className='flex '>Shop
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    {/* Submenu */}
                    {isShop && (
                        <ul className="absolute pt-1   w-40 h-1/3 border border-t-blue-700 border-t-4 bg-white overflow-scroll overflow-x-hidden  z-10 rounded-b-lg">
                            <li>
                                <NavLink to="/gifts/for-her" className="block py-2 hover:bg-blue-800 hover:text-white">For Her</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gifts/for-him" className="block py-2 hover:bg-blue-800 hover:text-white">For Him</NavLink>
                            </li>
                            {/* Add more submenu items as needed */}
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => setIsHealingStone(true)}
                    onMouseLeave={() => setIsHealingStone(false)}
                >
                    <NavLink
                        to="/healingstone"
                        activeClassName="text-orange-700"
                        className="relative block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        <div className='flex '>Healing Stone
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    {/* Submenu */}
                    {isHealingStone && (
                        <ul className="absolute pt-1    w-40 h-1/3 border border-t-blue-700 border-t-4 bg-white overflow-scroll overflow-x-hidden  z-10 rounded-b-lg">
                            <li>
                                <NavLink to="/gifts/for-her" className="block py-2 hover:bg-blue-800 hover:text-white">For Her</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gifts/for-him" className="block py-2 hover:bg-blue-800 hover:text-white">For Him</NavLink>
                            </li>
                            {/* Add more submenu items as needed */}
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => setIstraining(true)}
                    onMouseLeave={() => setIstraining(false)}
                >
                    <NavLink
                        to="/training"
                        activeClassName="text-orange-700"
                        className="relative block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        <div className='flex '>Training
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    {/* Submenu */}
                    {isTraining && (
                        <ul className="absolute pt-1  border border-t-blue-700 border-t-4 w-40 h-1/3 bg-white overflow-scroll overflow-x-hidden  z-10 rounded-b-lg">
                            <li>
                                <NavLink to="/gifts/for-her" className="block py-2 hover:bg-blue-800 hover:text-white">For Her</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gifts/for-him" className="block py-2 hover:bg-blue-800 hover:text-white">For Him</NavLink>
                            </li>
                            {/* Add more submenu items as needed */}
                        </ul>
                    )}
                </li>
                <li
                    onMouseEnter={() => setIsOurServices(true)}
                    onMouseLeave={() => setIsOurServices(false)}
                >
                    <NavLink
                        to="/services"
                        activeClassName="text-orange-700"
                        className="relative block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        <div className='flex '>Our Services
                            <img src={arrow} alt="" />
                        </div>
                    </NavLink>
                    {/* Submenu */}
                    {isOurServices && (
                        <ul className="absolute pt-1 w-40 h-1/3 border border-t-blue-700 border-t-4 bg-pink-100   overflow-scroll overflow-x-hidden  z-10 rounded-b-lg ">
                            <li>
                                <NavLink to="/gifts/for-her" className="block py-2 hover:bg-blue-800 hover:text-white">For Her</NavLink>
                            </li>
                            <li>
                                <NavLink to="/gifts/for-him" className="block py-2 hover:bg-blue-800 hover:text-white">For Him</NavLink>
                            </li>
                            {/* Add more submenu items as needed */}
                        </ul>
                    )}
                </li>

                <li>
                    <NavLink
                        to="/Contact"
                        // target='Contact.jsx'
                        activeClassName="text-orange-700"
                        className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0 font-semibold"
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default HeaderLower;

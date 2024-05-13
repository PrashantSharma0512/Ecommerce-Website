import React from 'react'
import { BrowserRouter,Link,NavLink } from 'react-router-dom'
import LoginNav from './LoginNav'
import HeaderUpper from './HeaderUpper'
import HeaderLower from './HeaderLower'

const Header = () => {
    return (
        <div className=' z-50 bg-white'>
        <LoginNav />
        <HeaderUpper />
        <HeaderLower />
        </div>
    )
}

export default Header

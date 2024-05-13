import React from 'react'
import { Link } from 'react-router-dom';

function Navlink() {

    const  links = [
      
            {name:"mummy ka magarmach"},
            {name:"Papa ki pari"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"},
            {name:"Home"}
        ]
    
  return (
    <>
    {
        links.map((link)=>(
            <div>
                <li>
                <Link  to='/' className="block py-2 hover:bg-blue-800 hover:text-white">{link.name}</Link>
                </li>
            </div>
        ))
    }
    </>
  )
}

export default Navlink;

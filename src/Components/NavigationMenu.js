import React from 'react'
import {Link} from "react-router-dom"

function NavigationMenu(props){
    return (
        <div>
            <div className="text-teal-500 font-semibold py-3">
                 Fun Nav Bar! 
            </div>
         <ul>
             <li>
                <Link 
                 to="/" 
                 className="text-teal-500 py-3 border-t border-b block"
                 onClick={props.closeMenu}
                 >
                    Home
                </Link>
            </li>
            <li>
                 <Link 
                    to="/about" 
                    className="text-teal-500 py-3 border-b block"
                    onClick={props.closeMenu}
                 >
                    About
                 </Link>

             </li>
             <li>
                 <Link 
                    to="/contact" 
                    className="text-teal-500 py-3 border-b block"
                    onClick={props.closeMenu}
                 >
                    Contact
                 </Link>

             </li>
            </ul>
        </div>
     )
}

export default NavigationMenu
                       
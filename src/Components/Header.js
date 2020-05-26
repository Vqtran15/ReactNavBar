import React from 'react'
import App from '../App'
import Navigation from './Navigation'

function Header() {
    return(
        <header className="bg-teal-600 text-white border-b p-3 flex justify-between items-center">
            <span className="font-normal">
                Vuong's First React App
            </span>
            

            <Navigation/>
        </header>
        
    )
}

export default Header
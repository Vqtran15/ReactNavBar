import React, { useState } from 'react'
import HelloWorld from '../Components/HelloWorld'
import {useTransition, animated} from 'react-spring'

function Home(){
 
    return(
        <div>
            <h1 className="font-bold text-2xl">Welcome to My Home</h1>
            <HelloWorld name="Vuong"/> 
        </div>
        
    )
}


export default Home
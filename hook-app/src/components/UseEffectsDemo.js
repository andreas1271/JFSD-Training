
import React, { useEffect } from 'react';

function UseEffectsDemo(){
    useEffect(()=>{
        console.log("Running in Background...") 
    })
    return(
        <div>
            <h2>I am using Effect Page</h2>
        </div>
    )
}

export default UseEffectsDemo;
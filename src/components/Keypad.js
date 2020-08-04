// Code Keypad Component Here
import React from 'react';

function Keypad(){
    
    const handleKeyUp = () => {
        console.log('Entering password...')
    }

    return (
        <input type='password' onKeyUp={handleKeyUp}/>
    )
}

export default Keypad
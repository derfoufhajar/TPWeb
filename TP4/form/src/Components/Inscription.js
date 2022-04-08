import '../App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Form, Field } from 'react-final-form'



function Inscription(){
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}
    return (
      
           
              <h1>Inscription</h1>
            
             
        
          )
          
      
    
}

export default Inscription;






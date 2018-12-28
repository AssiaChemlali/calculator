import React from "react";
 import Header from'./Header'
 import Calculator from'./Calculator/Calculator'
import '../Styles/App.css';
 
const  App =()=> {
        return (
           <>
               <Header title="Calculator with React"/>
               <Calculator/> 
            </>
        );
    
}
 
export default App;

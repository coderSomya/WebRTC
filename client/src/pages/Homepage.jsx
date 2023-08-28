import React from "react";
import './Homepage.css'


const Homepage = ()=>{
   return(
    <>
   <div className="homepage-container">
    <div>
        <input type="text" placeholder="enter your email here"/>
        <input type="text" placeholder="enter room code"/>
        <button>GO</button>
        </div>
    </div> 
    </>
   )
}

export default Homepage
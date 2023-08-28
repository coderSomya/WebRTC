import React from "react";
import './Homepage.css'
import { useSocket } from "../providers/Socket";


const Homepage = ()=>{

   const {socket} = useSocket();
   socket.emit('join-room', {roomid:1, emailid: "a@b.com"});
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
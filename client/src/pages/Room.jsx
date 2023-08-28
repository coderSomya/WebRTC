import React, {useEffect} from 'react' 
import "./Room.css"
import {useSocket} from "../providers/Socket"

const Room = () => {
  
   const {socket} = useSocket();

   const handleNewUserJoined =(data)=>{
      const {emailid} = data;
      alert("new user joined", emailid);
   }

   useEffect(()=>{
    socket.on('user-joined', handleNewUserJoined)
   }, [socket])

  return (
  <>
    <h3>
        welcome to my room have a seat
    </h3>
  </>
  )
}

export default Room
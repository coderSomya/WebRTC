import React, {useEffect, useCallback} from 'react' 
import "./Room.css"
import {useSocket} from "../providers/Socket"
import { usePeer } from '../providers/Peer'

const Room = () => {
  
   const {socket} = useSocket();
   const {Peer, createOffer} = usePeer();

   const handleNewUserJoined = useCallback(async (data)=>{
      const {emailid} = data;
      const offer = await createOffer();
      socket.emit('call-user', {emailid, offer})
   }, [createOffer, socket])

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
import React, {useMemo}from "react";

const PeerContext = React.createContext(null)

export const usePeer = ()=>{
    return React.useContext(PeerContext)
}

export const PeerProvider= (props)=>{
   const Peer = useMemo(()=>{
      new RTCPeerConnection({
        iceServers:[
            {
                urls:[
                    "stun:stun.l.google.com:19302",
                    "stun.global.stun.twilio.com:3478"
                ]
            }
        ]
      })
   }, [])

   const createOffer = async()=>{
    const offer = await Peer.createOffer();
    await Peer.setLocalDescription(offer);
    return offer
   }
   return(
    <PeerContext.Provider value={{Peer, createOffer}}>
    {props.children}
    </PeerContext.Provider>
   )
}
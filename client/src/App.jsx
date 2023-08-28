import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import { SocketProvider } from './providers/Socket'
import { PeerProvider } from './providers/Peer'
import Room from './pages/Room'

function App() {

  return (
    <>
    <SocketProvider>
      <PeerProvider>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/room/:id" element={<Room/>}/>
</Routes></PeerProvider>
</SocketProvider>
    </>
  )
}

export default App

import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import { SocketProvider } from './providers/Socket'
import Room from './pages/Room'

function App() {

  return (
    <>
    <SocketProvider>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/room/:id" element={<Room/>}/>
</Routes>
</SocketProvider>
    </>
  )
}

export default App

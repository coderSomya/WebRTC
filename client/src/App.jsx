import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import { SocketProvider } from './providers/Socket'

function App() {

  return (
    <>
    <SocketProvider>
<Routes>
  <Route path="/" element={<Homepage/>}/>
</Routes>
</SocketProvider>
    </>
  )
}

export default App

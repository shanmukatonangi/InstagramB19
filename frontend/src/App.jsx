import React from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar />
 <Profile />

    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shop from './pages/Shop/Shop'

function App() {
  const [user, setUser] = useState({username:'billie', isLoggin: true})

  return (
    <>
      <Shop name='Billies Shop' user={user}/>
      {/* <HomePage user={user}/> */}
      {/* <ProfilePage user={user} /> */}
    </>
  )
}

export default App

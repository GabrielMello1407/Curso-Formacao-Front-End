import Navbar from './components/Navbar'

import './App.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <Navbar />
      <h1>Context API</h1>
      <Outlet />
    </div>
  )
}

export default App

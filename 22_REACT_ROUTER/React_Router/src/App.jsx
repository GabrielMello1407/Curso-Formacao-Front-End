
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {


  return (
    <div>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
